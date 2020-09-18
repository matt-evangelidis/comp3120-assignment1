import React from 'react';
import Post from './Post';
import util from '../utils/utils'

const PostList = ({users, posts}) => {
    return (
    <div>
        {posts.map(post => 
        <Post key={post.id} 
            user={util.findUser(users, post)} 
            post={post}/>)}
    </div>
    )
}

export default PostList