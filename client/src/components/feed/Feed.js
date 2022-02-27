import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Feed({ username }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            username ?
                await axios.get('/posts/profile/' + username)
                : await axios.get('posts/timeline/621b3cbdaddaa2a31271761b')
                    .then(function (response) {
                        setPosts(response.data)
                        console.log(response)
                        console.log(response.data)
                    }).catch(function (error) {
                        console.log(error)
                    }).then(function () {
                    })
        }
        fetchPosts()
    }, [username])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map(p => (
                    <Post
                        key={p._id}
                        post={p}
                    />
                )
                )}
            </div>
        </div>
    )
}
