import React from 'react';

const User = ({user}) =>{
    return(
        <li className="user">
            <img src={user.avatar} alt={user.username}/>
            <a href={`/users/${user.id}`}>{user.username}</a>
        </li>
    )
}

export default User