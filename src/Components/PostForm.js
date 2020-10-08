import React, {useState, useEffect} from 'react';
import Post from './Post';
import postService from '../services/posts'

const PostForm = ({user, updateFn}) => {
    const initialState = {user: user, content:"What's on your mind?"}
    
    const [newPost, setNewPost] = useState(initialState)

    const handlePostChange = (event) => {
        console.log(event.target.value)
        const postObject = {
            user: user,
            content: event.target.value
        }
        setNewPost(postObject)
    }

    const formHandler = (event) => {
        event.preventDefault()
        console.log("Post Submitted:", newPost)
        updateFn(newPost)
        setNewPost(initialState)
    }
    
    return(
        <div>
            <h1>Post Form</h1>
            <form onSubmit={formHandler}>
                <label htmlFor="text">{initialState.content}</label>
                <input name="text" onChange={handlePostChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm