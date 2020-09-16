import React from 'react';

const Message = ({user, message}) => {
    
    //const userURL = "/users/" + user.id;
    console.log(user)
    //<a className = "Message" href = {userURL}>@{user.id}</a>
    //<a className = "Message" href = {userURL}>@{user.id}</a>
    return (
    <div>
        <div><img src = {user.avatar} alt = {user.id}/></div>
        <p>@{user.id}: {message.timestamp} {message.content}</p>
    </div>
    )
}

export default Message