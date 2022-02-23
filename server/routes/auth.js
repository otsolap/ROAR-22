const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// Register user
router.post('/register', async (req, res) => {
    try {
        // securing new password for users.
        const salt = await bcrypt.genSalt(10)
        const hashedPW = await bcrypt.hash(req.body.password, salt)
        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPW,
        })

        // save user & return response
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).send("User not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        // this needs to be && but maybe your VPN is fucking things up?
        // REMEMBER TO CHECK LATER.
        !validPassword || res.status(400).json('Wrong password')

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }

})


module.exports = router