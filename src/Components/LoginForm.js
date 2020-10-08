import React, {useState} from 'react';
import loginService from '../services/login'

const LoginForm = ({
    handleSubmit,
    handleUsername,
    handlePassword,
    username,
    password
}) => {


    return(
        <form onSubmit={handleSubmit}>
            <div>
                username
                <input type="text" value={username} name="Username" 
                onChange={handleUsername}/>
            </div>
            <div>
                password
                <input type="text" value={password} name="Password" 
                onChange={handlePassword}/>
            </div>
            <button type="submit">login</button>
        </form>
    )
}

export default LoginForm