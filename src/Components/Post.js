import React from 'react';

const Post = ({user, post}) => {
    
    console.log("User: ", user)
    console.log("Post: ", post)

    console.log(user)
    //<a className = "post" href = {userURL}>@{user.id}</a>
    //<a className = "post" href = {userURL}>@{user.id}</a>
    if (user != null) {
        return (
        <div>
            <img src = {user.avatar} alt = {user.id}/>
            <p>@{user.id}: {post.timestamp} {post.content}</p>
        </div>
        )
    }
    else {
        return (
        <div>
            <img/>
            <p>User Not Found: {post.timestamp} {post.content}</p>
        </div>
        )
    }
}

export default Post