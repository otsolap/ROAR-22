import Feed from "../../components/feed/Feed"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Notifications from "../../components/notifications-bar/Notifications"
import './home.css'

export default function Home() {
    return (
        <>
            <Header />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Notifications />
            </div>
        </>
    )
}
