import React from 'react';

const Post = ({user, post}) => {
    
    //console.log("User: ", user)
    //console.log("Post: ", post)
    if (user != null) {
        return (
        <div className="post">
            <img src = {user.avatar} alt = {user.username}/>
            <p><a href={`/users/${user.id}`}>@{user.username}</a>: {post.timestamp}</p>
            <p>{post.content}</p>
            <button>Like Post</button>
            <button>Follow {user.username}</button>
            <a href={`/posts/${post.id}`}>See Post</a>
        </div>
        )
    }
    else {
        return (
        <div>
            <p>User Not Found: {post.timestamp} {post.content}</p>
        </div>
        )
    }
}

export default Post