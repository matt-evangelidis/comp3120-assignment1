import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './components/Post';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import postService from './services/posts';
import userService from './services/users';
import util from './utils/utils'

function App() {
  
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAll()
    .then((data) => {
      console.log("response: ", data)
      setUsers(data)
    })
  },[])
  const [posts, setPosts] = useState([])

  useEffect(() => {
      postService.getAll()
      .then((data) => {
        console.log("response: ", data)
        setPosts(data)
      })
    },[])

  return (
    <div className="App">
      <header className="header">
          <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>All Posts</li>
            <li>Users</li>
            <li>About</li>
          </ul>
          </nav>
      </header>
      {/* {posts.map(post => <Post key={post.id} user={util.findUser(users, post)} post={post}/>)} */}
      <PostForm user={users[0]}/>
      <PostList users={users} posts={posts}/>
      
    </div>

  );
}

export default App;
