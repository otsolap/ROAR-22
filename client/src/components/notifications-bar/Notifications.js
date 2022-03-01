import './notifications.css'
import { Users } from '../../util/dummyData'
import Online from '../online/Online'

export default function Notifications({ user }) {
    const HomeNotifs = () => {
        return (
            <>
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
            </>
        )
    }

    const ProfileNotifs = () => {
        const PF = process.env.REACT_APP_PUBLIC_FOLDER
        return (
            <>
                <h4 className="notifTitle">User information</h4>
                <dic className="notifInfo">
                    <div className="notifInfoItem">
                        <span className="notifInfoKey">City:</span>
                        <span className="notifInfoValue">{user.city}</span>
                    </div>
                    <div className="notifInfoItem">
                        <span className="notifInfoKey">From:</span>
                        <span className="notifInfoValue">{user.countryOfOrigin}</span>
                    </div>
                    <div className="notifInfoItem">
                        <span className="notifInfoKey">Relationship:</span>
                        <span className="notifInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : ""} </span>
                    </div>
                    <h4 className="notifTitle">User friends</h4>
                    <div className="notifFollowings">
                        <div className="notifFollowing">
                            <img
                                className="notifFollowingImg"
                                src={`${PF}person/1.jpeg`} alt="" />
                            <span className="notifFollowingName">John Carter of Mars</span>
                        </div>
                    </div>
                </dic>
            </>
        )
    }

    return (
        <div className="notificationsBar">
            <div className="notifWrapper">
                {user ? <ProfileNotifs /> : <HomeNotifs />}
            </div>
        </div>
    )
}
