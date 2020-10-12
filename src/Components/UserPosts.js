import React from 'react'
import Post from './Post'

const UserPosts = ({loggedUser,user, posts}) => {
    
    if (posts.length <= 0) {
        return(
            <div>No Posts Found</div>
        )
    }

    if (posts !== undefined){
        return(
        <div>
            {posts.map(post =>
            <div className="post"key={post.id}>
                <p>@{user.username}: {post.timestamp} {post.content}</p>
            </div>)}
        </div>
    )}

}

export default UserPosts