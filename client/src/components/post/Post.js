import './post.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../util/dummyData'

export default function Post({ post }) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfilePic"
                            src={Users.filter(user => user.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter(user => user.id === post.userId)[0].username}</span>
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
                        src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postIcon" src="/assets/like.png" alt="like post" />
                        <img className="postIcon" src="/assets/heart.png" alt="love post" />
                        <span className="postLikeCounter">{post.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentTextCounter">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
