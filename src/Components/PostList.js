import React, {useState, useEffect} from 'react';
import Post from './Post';
import util from '../utils/utils'

const PostList = ({users, posts}) => {
    const [sortedPosts, setPosts] = useState(posts)

    const sortFirstLast = (posts) => {
        const arr = JSON.parse(JSON.stringify(posts))
        arr.sort((a,b)=>{
            return new Date(b.timestamp) - new Date(a.timestamp)
        })
        console.log("Sorted Posts", arr)
        setPosts(arr)
    }
    useEffect(() => sortFirstLast(posts),[posts])

    const sortLastFirst = (posts) => {
        const arr = JSON.parse(JSON.stringify(posts))
        arr.sort((a,b)=>{
            return new Date(a.timestamp) - new Date(b.timestamp)
        })
        console.log("Sorted Posts", arr)
        setPosts(arr)
    }
    useEffect(() => sortLastFirst(posts),[posts])

    return (
    <div>
        <button onClick={() => sortFirstLast(posts)}>Sort By Most Recent</button>
        <button onClick={() => sortLastFirst(posts)}>Sort By Oldest</button>
        {sortedPosts.map(post => 
        <Post key={post.id} 
            user={util.findUser(users, post)} 
            post={post}/>)}
    </div>
    )
}

export default PostList