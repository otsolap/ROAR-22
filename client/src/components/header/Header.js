import './header.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Header() {

    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                    <span className="logo">Roar</span>
                </Link>
            </div>
            <div className="headerCenter">
                <div className="searchBar">
                    <Search
                        className="searchIcon"
                    />
                    <input
                        className="searchInput"
                        placeholder="Search for friends or posts"
                    />
                </div>
            </div>
            <div className="headerRight">
                <div className="headerLinks">
                    <span className="headerLink">Home</span>
                    <span className="headerLink">Timeline</span>
                </div>
                <div className="headerIcons">
                    <div className="headerIcon">
                        <Person />
                        <span className="headerCountBadge">1</span>
                    </div>
                    <div className="headerIcon">
                        <Chat />
                        <span className="headerCountBadge">1</span>
                    </div>
                    <div className="headerIcon">
                        <Notifications />
                        <span className="headerCountBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? user.profilePicture : PF + `/person/noAvatar.png`} alt="" className="profilePic" />
                </Link>
            </div>
        </div >
    )
}
