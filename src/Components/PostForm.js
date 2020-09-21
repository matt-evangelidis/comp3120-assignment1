import React, {useState, useEffect} from 'react';
import Post from './Post';

const PostForm = ({user}) => {
    const [newPost, setNewPost] = useState("What's on your mind?")

    const addPost = (event) => {
        event.preventDefault()
        const postObject = {
            user: user,
            content: newPost
        }
        console.log("The Post: ", postObject)
    }

    const handlePostChange = (event) => {
        console.log(event.target.value)
        setNewPost(event.target.value)
    }
    
    return(
        <div>
            <h1>Post Form</h1>
            <form onSubmit={addPost}>
                <input value={newPost} onChange={handlePostChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm