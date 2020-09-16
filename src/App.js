import React from 'react';
import './App.css';
import Message from './components/Message';

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

  const message = {
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
      <div><Message user={user} message={message}/> </div>
    </div>

  );
}

export default App;
