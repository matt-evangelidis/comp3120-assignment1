import React, {useState,useEffect} from 'react';
import postService from '../services/posts'

const Post = ({loggedUser, user, post}) => {
    const[liked, setLiked] = useState(post.likes.includes(loggedUser.id))

    const getUser = () => {
        const loggedUser = window.localStorage.getItem("loggedUser")
        
        if (loggedUser){
          const user = JSON.parse(loggedUser)
          return user
        }
        return null
    }

    const likePost = () => {
        postService.likePost(loggedUser, post.id)
        setLiked(true)
    }
    const unlikePost = () => {
        postService.unlikePost(loggedUser, post.id)
        setLiked(false)
    }

    if (user != null) {
        if (liked){
            return (
            <div className="post">
                <img src = {user.avatar} alt = {user.username}/>
                <p><a href={`/users/${user.id}`}>@{user.username}</a>: {post.timestamp}</p>
                <p>{post.content}</p>
                <button onClick={() => unlikePost()}>Unlike Post</button>
                <button>Follow {user.username}</button>
                <a href={`/posts/${post.id}`}>See Post</a>
            </div>
            )
        }
        return (
        <div className="post">
            <img src = {user.avatar} alt = {user.username}/>
            <p><a href={`/users/${user.id}`}>@{user.username}</a>: {post.timestamp}</p>
            <p>{post.content}</p>
            <button onClick={() => likePost()}>Like Post</button>
            <button>Follow {user.username}</button>
            <a href={`/posts/${post.id}`}>See Post</a>
        </div>
        )
    }
    else {
        return (
        <div>
            <p>User Not Found: {post.timestamp} {post.content}</p>
        </div>
        )
    }
}

export default Post