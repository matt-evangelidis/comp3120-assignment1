import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Post from './Post'

const PostID = ({loggedUser,userFn, postFn}) => {
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

    console.log("Posts:", postData)
    if (postData !== undefined && userData !== undefined){
        const post = postData.find(p => p.id === String(id))
        console.log("Post:",post)
        const user = userData.find(u => u.id === post.user)

        return(
            <Post loggedUser={loggedUser}user={user} post={post}/>
        )
    }

    return(
        <div>Loading</div>
    )
}

export default PostID