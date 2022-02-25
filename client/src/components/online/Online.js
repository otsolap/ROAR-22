import './online.css'
export default function Online({ user }) {
    return (
        <li className="friend">
            <div className="friendImgContainer">
                <img src={user.profilePicture} className="friendImg" alt="" />
                <span className="friendOnlineStatus"></span>
            </div>
            <span className="friendUsername">{user.username}</span>
        </li>
    )
}
