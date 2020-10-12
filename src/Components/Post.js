import React, {useState,useEffect} from 'react';
import postService from '../services/posts'
import userService from '../services/users'

const Post = ({loggedUser, user, post}) => {
    const[liked, setLiked] = useState(post.likes.includes(loggedUser.id))
    const[likeUsers, setLikedUsers] = useState()

    const likePost = () => {
        postService.likePost(loggedUser, post.id)
        setLiked(true)
    }
    const unlikePost = () => {
        postService.unlikePost(loggedUser, post.id)
        setLiked(false)
    }

    // const getLikeUsers = (likeUsers) => {
    //     const 
    // }

    // const getLikeUsers = (likeUsers) => {
    //     const arr = likeUsers.map( u => userService.getUser(u).then())
    //     // setLikedUsers(arr)
    // }
    // // useEffect(() => getLikeUsers,[])

    // console.log("Liked Users:", likeUsers)

    // const displayLikeUsers = () => {
    //     getLikeUsers(likeUsers)
    //     return(
    //         <ul>
    //             {likeUsers.map(u => 
    //             <li key={u.id}>
    //                 <a href={`/users/${u.id}`}>@{u.username}</a>
    //             </li>)}
    //         </ul>
    //     )
    // }

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
                {/* <button onClick={() => displayLikeUsers()}>See Liking Users</button> */}
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
            {/* {displayLikeUsers()} */}
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