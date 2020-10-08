import React from 'react'
import User from './User'

const Home = ({user}) => {
    if (user != null) {
        return(
            <User user={user}/>
        )
    }
    else {
        return(
            <p>No User Logged In</p>
        )
    }
}

export default Home