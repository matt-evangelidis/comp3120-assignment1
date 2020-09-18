import React from 'react';

const Post = (props) => {
    
    console.log("props: ", props)

    const user = props.user
    const post = props.post

    //const userURL = "/users/" + user.id;

    // const user = userService.findUser(post)

    console.log(user)
    //<a className = "post" href = {userURL}>@{user.id}</a>
    //<a className = "post" href = {userURL}>@{user.id}</a>
    return (
    <div>
        <div><img src = {user.avatar} alt = {user.id}/></div>
        <p>@{user.id}: {post.timestamp} {post.content}</p>
    </div>
    )
}

export default Post