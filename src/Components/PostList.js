import React, {useState, useEffect} from 'react';
import Post from './Post';
import postService from '../services/posts'

const PostList = ({users, posts}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAll()
        .then((data) => {
          console.log("response: ", data)
          setPosts(data)
        })
      },[])


    console.log(users, posts)
    var array = []
    return (
        <ul>
            
        </ul>
    )
}

export default PostList