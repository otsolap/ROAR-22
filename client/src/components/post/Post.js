import { useState, useEffect } from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
import axios from 'axios'

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER


    useEffect(() => {
        const fetchUser = async () => {
            axios.get(`users/${post.userId}`).then(function (res) {
                console.log(res.data)
                setUser(res.data)
            }).catch(function (error) {
                console.log(error)
            }).then(function () {
            })
        }
        fetchUser()
    }, [])

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfilePic"
                            src={user.profilePicture || PF + 'person/noAvatar.png'} alt="" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.description}</span>
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
