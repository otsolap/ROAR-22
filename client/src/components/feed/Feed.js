import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'


export default function Feed({ username }) {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchPosts = async () => {
            await (username ? axios.get('/posts/profile/' + username)
                : axios.get('/posts/timeline/' + user._id))
                .then(async function (response) {
                    setPosts(response.data)
                    console.log(response.data)
                }).catch(async function (error) {
                    console.log(error)
                }).then(async function () {
                })
        }
        fetchPosts()
    }, [username, user._id])

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
