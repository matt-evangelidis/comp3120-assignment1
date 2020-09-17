import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './components/Post';
import postService from './services/posts';
import userService from './services/users';

function App() {
  
  const user = {
    id: "Bobalooba",
    password: "bob",
    avatar: "http://robohash.org/bob",
    follows: [
        "Barfoo",
        "Jimbulator"
    ]
  }

  const post = {
    timestamp: "2020-07-14 15:31:21",
    content: "A post"
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
      postService.getAll()
      .then((data) => {
        console.log("response: ", data)
        setPosts(data)
      })
    },[])


  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAll()
    .then((data) => {
      console.log("response: ", data)
      setUsers(data)
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
      {/* <Post user={user} post={post}/> */}
      {posts.map((post) => (<Post post={post}/>))}
    </div>

  );
}

export default App;
