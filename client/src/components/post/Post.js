import './post.css'
import { MoreVert } from '@material-ui/icons'

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfilePic"
                            src="/assets/person/Leijona.jpg" alt="" />
                        <span className="postUsername">Adrian Veidt</span>
                        <span className="postDate">30 minutes ago.</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">First Post. :-)</span>
                    <img
                        className="postImg"
                        src="/assets/post/Simba.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postIcon" src="/assets/like.png" alt="like post" />
                        <img className="postIcon" src="/assets/heart.png" alt="love post" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentTextCounter">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
