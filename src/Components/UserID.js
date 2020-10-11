import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import UserPosts from './UserPosts'
import User from './User'

const UserID = ({userFn, postFn}) => {
    const [postData, setPostData] = useState()
    const [userData, setUserData] = useState()
    const id = useParams().id

    useEffect(() => {
        postFn()
        .then((data) => {
          console.log("PostData response: ", data)
          setPostData(data)
        })
      },[postFn])

    useEffect(() => {
        userFn()
        .then((data) => {
          console.log("UserData response: ", data)
          setUserData(data)
        })
      },[userFn])
    
    if (userData !== undefined && postData !== undefined){
        const user = userData.find(u => u.id === String(id))
        const userPosts = user.posts
        console.log("User.posts:", userPosts)
        
        return(
            <div>
                <User user={user}/>
                <UserPosts user={user} posts={userPosts}/>
            </div>
        )
    }

    return(
        <div>Loading</div>
    )
}

export default UserID