import React from 'react';

const User = ({user}) =>{
    console.log("Calling User Component. User:", user)
    return(
        <div>
            <img src={user.avatar} alt={user.username}/>
            <ul>
                <li>{user.username}</li>
            </ul>
        </div>
    )
}

export default User