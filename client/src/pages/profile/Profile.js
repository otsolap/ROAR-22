import { useState, useEffect } from 'react'
import './profile.css'
import Header from "../../components/header/Header"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Notifications from "../../components/notifications-bar/Notifications"
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    const username = useParams().username

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(`/users?username=${username}`).then(function (res) {
                setUser(res.data)
            }).catch(function (error) {
                console.log(error)
            }).then(function () {
            })
        }
        fetchUser()
    }, [username])


    return (
        <>
            <Header />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightHeader">
                        <div className="profileCover">
                            <img className="profileBanner" alt="Banner" src={user.coverPicture ? user.coverPicture : PF + "person/noCover.png"} />
                            <img className="profileAvatar" alt="Banner" src={user.profilePicture ? user.profilePicture : PF + "person/noAvatar.png"} />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <h4 className="profileInfoDescription">{user.desc}</h4>
                        </div>
                    </div>
                    <div className="profileRightFooter">
                        <Feed username={username} />
                        <Notifications user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
