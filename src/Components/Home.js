import React from 'react'
import User from './User'

const Home = ({users}) => {
    const user = users[0]
    console.log("Current User:", user)
    if (user != null) {
        return(
            <User user={user}/>
        )
    }
    else {
        return(
            <p>User not Found!</p>
        )
    }
}

export default Home