import './share.css'
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@material-ui/icons'
import { useContext, useRef, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(UserContext)
    const descRef = useRef()
    const [file, setFile] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: descRef.current.value
        }
        if (file) {
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append('name', fileName)
            data.append('file', file)
            newPost.img = fileName
            try {
                await axios.post('/upload', data)
            } catch (err) {
                console.log(err)
            }
        }

        try {
            await axios.post('/posts', newPost)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="shareContainer">
            <div className="shareWrapper">
                <div className="shareHeader">
                    <img src={user.profilePicture || PF + 'person/noAvatar.png'}
                        alt=""
                        className="shareProfilePic"
                    />
                    <input
                        placeholder={"Whats on your mind? " + user.username + "?"}
                        className="shareInput"
                        ref={descRef}
                    />
                </div>
                <hr className="shareHR" />
                {file && (
                    <div className="shareImgContainer">
                        <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                        <Cancel className="cancelShareImg" onClick={() => setFile(null)} />
                    </div>
                )}
                <form
                    onSubmit={handleSubmit}
                    className="shareFooter">
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input
                                onChange={(e) => setFile(e.target.files[0])}
                                type="file"
                                id="file"
                                style={{ display: 'none' }}
                                accept=".png, .jpeg, .jpg"
                            />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="gold" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button type="submit" className="shareButton">Share</button>
                </form>
            </div>
        </div>
    )
}
