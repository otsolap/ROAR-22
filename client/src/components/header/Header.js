import './header.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                    <span Classname="logo">Roar</span>
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
                <img src="/assets/person/Leijona.jpg" alt="" className="profilePic" />
            </div>
        </div>
    )
}
