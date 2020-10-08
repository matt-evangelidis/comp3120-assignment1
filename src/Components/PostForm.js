import React, {useState, useEffect} from 'react';
import Post from './Post';
import postService from '../services/posts'

const PostForm = ({user, updateFn}) => {
    const [newPost, setNewPost] = useState("")

    // const handlePostChange = (event) => {
    //     console.log(event.target.value)
    //     const postObject = {
    //         user: user,
    //         content: event.target.value
    //     }
    //     setNewPost(postObject)
    // }

    const formHandler = (event) => {
        event.preventDefault()
        console.log("Post Submitted:", newPost)
        
        const postObject = {
            user: user,
            content: newPost
        }
        updateFn(postObject)
        setNewPost("")
    }
    
    return(
        <div>
            <h1>Post Form</h1>
            <form onSubmit={formHandler}>
                <label htmlFor="text">What's on your mind?</label>
                <input name="text" onChange={({target}) => setNewPost(target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm