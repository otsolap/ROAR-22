import './notifications.css'
import Online from '../online/Online'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Add, Remove } from '@material-ui/icons'

export default function Notifications({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([])
    const { user: currentUser, dispatch } = useContext(UserContext)
    const [followed, setFollowed] = useState(currentUser.following.includes(user?.id));

    useEffect(() => {
        const getFriends = async () => {
            try {
                await (axios.get("/users/friends/" + user._id))
                    .then(async function (response) {
                        setFriends(response.data)
                    });
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const handleFollow = async () => {
        try {
            if (followed) {
                await (axios.put(`/users/${user._id}/unfollow`), {
                    userId: currentUser._id,
                });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await (axios.put(`/users/${user._id}/follow`), {
                    userId: currentUser._id,
                });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
        } catch (err) {
            console.log(err)
        }
        setFollowed(!followed);
    }

    const HomeNotifs = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={PF + "gift.png"} className="birthdayImg" alt="User birthday" />
                    <span className="birthdayText">
                        <b>Godwyck</b> and <b>3 other friends</b> are having a Birthday!
                    </span>
                </div>
                <div className="mainosContainer">
                    <img src={PF + "/RoarBG.jpg"} className="mainosImg" alt="Mainos" />
                </div>
                <h4 className="FriendsHeader">Online Friends</h4>
                <ul className="friendList">
                    {friends.map(friend => (
                        <Online
                            key={friend._id}
                            user={friend}
                        />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileNotifs = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button onClick={handleFollow} className="followButton">
                        {followed ? 'Unfollow' : 'Follow'}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                <h4 className="notifTitle">User information</h4>
                <div className="notifInfo">
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
                    {friends.map(friend => (
                        <Link style={{ textDecoration: 'none' }} to={"/profile/" + friend.username}>
                            <div key={friend._id} className="notifFollowings">
                                <div className="notifFollowing">
                                    <img
                                        className="notifFollowingImg"
                                        src={friend.profilePicture ? friend.profilePicture : PF + "person/noAvatar.png"} alt="" />
                                    <span className="notifFollowingName">{friend.username}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
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
