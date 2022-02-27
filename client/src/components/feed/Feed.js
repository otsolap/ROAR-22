import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Feed() {
    const [posts, setPosts] = useState([])
    const [text, setText] = useState('')

    useEffect(() => {
        const fetchPosts = async () => {
            const res = axios.get('posts/timeline/621606502acc56c278f81f7d')
            console.table(res)
            // setPosts(res.data)
        }
        fetchPosts()
    }, [])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {/*           {Posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                    />
                ))} */}
            </div>
        </div>
    )
}
