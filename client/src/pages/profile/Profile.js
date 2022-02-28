import { useState, useEffect } from 'react'
import './profile.css'
import Header from "../../components/header/Header"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Notifications from "../../components/notifications-bar/Notifications"
import axios from 'axios'


export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(`/users?username=Travis`).then(function (res) {
                setUser(res.data)
            }).catch(function (error) {
                console.log(error)
            }).then(function () {
            })
        }
        fetchUser()
    })


    return (
        <>
            <Header />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightHeader">
                        <div className="profileCover">
                            <img className="profileBanner" alt="Banner" src={`${PF}post/3.jpeg`} />
                            <img className="profileAvatar" alt="Banner" src={`${PF}person/7.jpeg`} />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <h4 className="profileInfoDescription">{user.desc}</h4>
                        </div>
                    </div>
                    <div className="profileRightFooter">
                        <Feed username={'Travis'} />
                        <Notifications profile />
                    </div>
                </div>
            </div>
        </>
    )
}
