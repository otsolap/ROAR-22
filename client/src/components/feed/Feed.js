import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            axios.get("posts/timeline/621606502acc56c278f81f7d").then(function (response) {
                console.log(response.data)
                setPosts(response.data)
            }).catch(function (error) {
                console.log(error)
            }).then(function () {
            })
        }
        fetchPosts()
    }, [])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.length < 1 && posts.map(p => (
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
