import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)
    const descRef = useRef()

    return (
        <div className="shareContainer">
            <div className="shareWrapper">
                <div className="shareHeader">
                    <img src={user.profilePicture ? user.profilePicture : PF + 'person/noAvatar.png'}
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
                <div className="shareFooter">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
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
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
