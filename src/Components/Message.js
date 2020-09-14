import React from 'react';

const Message = ({user, message}) => {
    
    const userURL = "/users/" + user.id;
    console.log(user)
    
    return (
    <div>
        <div><img src = {user.avatar} alt = {user.id}/></div>
        <p><a className = "Message" href = {userURL}>@{user.id}</a>: {message.timestamp} {message.content}</p>
    </div>
    )
}

export default Message