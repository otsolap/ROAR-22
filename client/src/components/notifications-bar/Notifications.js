import './notifications.css'
import { Users } from '../../util/dummyData'
import Online from '../online/Online'

export default function Notifications() {
    return (
        <div className="notificationsBar">
            <div className="notifWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" className="birthdayImg" alt="User birthday" />
                    <span className="birthdayText">
                        <b>Godwyck</b> and <b>3 other friends</b> are having a Birthday!
                    </span>
                </div>
                <div className="mainosContainer">
                    <img src="/assets/RoarBG.jpg" className="mainosImg" alt="Mainos" />
                </div>
                <h4 className="FriendsHeader">Online Friends</h4>
                <ul className="friendList">
                    {Users.map(user => (
                        <Online
                            key={user.id}
                            user={user}
                        />
                    ))}
                </ul>
            </div>

        </div>
    )
}
