import React, {useState, useEffect} from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import postService from './services/posts';
import userService from './services/users';
import Users from './components/Users'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Switch, Route, Link
}
from 'react-router-dom'

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
  
  const addNewPost = (newPost) => {
      const postObject = {
        user: newPost.user,
        content: newPost.content
    }
    postService.create(postObject)
    .then(data => {
      console.log("POST Response: ", data)
      setPosts([...posts, data])
    })
  }

  useEffect(() => {
      postService.getAll()
      .then((data) => {
        console.log("response: ", data)
        setPosts(data)
      })
    },[])

  return (
    // <div className="App">
    //   <header className="header">
    //       <nav className="navbar">
    //       <ul>
    //         <li>Home</li>
    //         <li>All Posts</li>
    //         <li>Users</li>
    //         <li>About</li>
    //       </ul>
    //       </nav>
    //   </header>
    //   {/* {posts.map(post => <Post key={post.id} user={util.findUser(users, post)} post={post}/>)} */}
    //   <PostForm user={users[0]} updateFn={addNewPost}/>
    //   <PostList users={users} posts={posts}/>
    // </div>

    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/posts">All Posts</Link>
        <Link to="/users">Users</Link>
      </div>

      <Switch>
        <Route path="/posts">
          <PostList users={users} posts={posts}/>
        </Route>
        <Route path="/users">
          <Users users={users}/>
        </Route>
        <Route path="/">
          <Home users={users}/>
          <PostForm user={users[0]} updateFn={addNewPost}/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
