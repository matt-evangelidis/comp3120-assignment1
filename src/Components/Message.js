import React from 'react';

const Message = ({user, message}) => {
    
    const userURL = "/users/" + user.name;
    console.log(user)
    
    return (
    <div>
        <div><img src = {user.image} alt = {user.name}/></div>
        <p><a className = "Message" href = {userURL}>@{user.name}</a>: {message.timestamp} {message.content}</p>
    </div>
    )
}

export default Message