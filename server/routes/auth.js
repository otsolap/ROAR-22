const router = require('express').Router()
const User = require('../models/User')

// Register user
router.get('/register', async (req, res) => {
    const user = await new User({
        username: 'Otso',
        email: 'otso@email.com',
        password: 'secret1234',
    })

    await user.save()
    res.send('ok')
})

module.exports = router