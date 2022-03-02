import { useState, useEffect, useContext } from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    // currentUser is a nickname for user
    // because user has been declared by state already. line 12.
    const { user: currentUser } = useContext(UserContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(() => {
        const fetchUser = async () => {
            await axios.get(`/users?userId=${post.userId}`).then(function (res) {
                setUser(res.data)
            }).catch(function (error) {
                console.log(error)
            }).then(function () {
            })
        }
        fetchUser()
    }, [post.userId])

    const likeHandler = () => {
        try {
            axios.put('/posts/' + post._id + '/like', { userId: currentUser._id })
        } catch (err) {

        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img
                                className="postProfilePic"
                                src={user.profilePicture ? user.profilePicture : PF + 'person/noAvatar.png'} alt=""
                            />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img
                        className="postImg"
                        src={PF + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postIcon" src={`${PF}like.png`} onClick={likeHandler} alt="like post" />
                        <img className="postIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="love post" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentTextCounter">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
