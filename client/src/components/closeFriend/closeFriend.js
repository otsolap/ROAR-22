import './closeFriend.css'

export default function closeFriend({ user }) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendPic" src={user.profilePicture} alt="" />
            <span className="sidebarFriendname">{user.username}</span>
        </li>
    )
}
