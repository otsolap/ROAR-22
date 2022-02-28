import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Feed({ username }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            await (username ? axios.get('/posts/profile/' + username) : axios.get('posts/timeline/621b367aaddaa2a312717607'))
                .then(async function (response) {
                    setPosts(response.data)
                }).catch(async function (error) {
                    console.log(error)
                }).then(async function () {
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
