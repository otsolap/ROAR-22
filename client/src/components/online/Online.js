import './online.css'
export default function Online({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="friend">
            <div className="friendImgContainer">
                <img src={PF + user.profilePicture} className="friendImg" alt="" />
                <span className="friendOnlineStatus"></span>
            </div>
            <span className="friendUsername">{user.username}</span>
        </li>
    )
}
