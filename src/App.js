import React from 'react';
import './App.css';
import Post from './components/Post';

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
      <Post user={user} post={post}/>
    </div>

  );
}

export default App;
