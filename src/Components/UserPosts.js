import React from 'react'

const UserPosts = ({user, posts}) => {
    
    if (posts.length <= 0) {
        return(
            <div>No Posts Found</div>
        )
    }

    if (posts !== undefined){
        return(
        <div>
            {posts.map(post =>
            <p key={post.id}>
                @{user.username}: {post.timestamp} {post.content}
            </p>)}
        </div>
    )}

}

export default UserPosts