import './profile.css'
import Header from "../../components/header/Header"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Notifications from "../../components/notifications-bar/Notifications"


export default function Profile() {
    return (
        <>
            <Header />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightHeader">
                        <div className="profileCover">
                            <img className="profileBanner" alt="Banner" src="assets/post/3.jpeg" />
                            <img className="profileAvatar" alt="Banner" src="assets/person/7.jpeg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Otso Papparainen</h4>
                            <h4 className="profileInfoDescription">Koodari</h4>
                        </div>
                    </div>
                    <div className="profileRightFooter">
                        <Feed />
                        <Notifications profile />
                    </div>
                </div>
            </div>
        </>
    )
}
