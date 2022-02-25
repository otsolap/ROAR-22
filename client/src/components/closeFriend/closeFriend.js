import './closeFriend.css'

export default function closeFriend({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendPic" src={PF + user.profilePicture} alt="" />
            <span className="sidebarFriendname">{user.username}</span>
        </li>
    )
}
