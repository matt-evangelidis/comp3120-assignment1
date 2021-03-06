import React, {useState, useEffect} from 'react';
import './App.css';
import PostList from './Components/PostList.js';
import PostForm from './Components/PostForm.js';
import LoginForm from './Components/LoginForm.js';
import postService from './services/posts.js';
import userService from './services/users.js';
import loginService from './services/login.js'
import Users from './Components/Users.js'
import Home from './Components/Home.js'
import PostID from './Components/PostID.js'
import UserID from './Components/UserID.js'

import {
  BrowserRouter as Router,
  Switch, Route, Link
}
from 'react-router-dom'

function App() {
  
  //Users state
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAll()
    .then((data) => {
      console.log("Users response: ", data)
      setUsers(data)
    })
  },[])

  //Posts state
  const [posts, setPosts] = useState([])
  
  const addNewPost = (newPost) => {
    postService.create(newPost)
    .then(data => {
      console.log("Posts Response: ", data)
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

    //Login state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const storeUser = () => {
      const loggedUserJSON = window.localStorage.getItem("loggedUser")

      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        postService.setToken(user.token)
      }
    }
    const getUser = () => {
      const loggedUser = window.localStorage.getItem("loggedUser")
      
      if (loggedUser){
        const user = JSON.parse(loggedUser)
        return user
      }
      return null
    }
    const logout = () => {
      setUser(null)
      window.localStorage.removeItem("loggedUser")
      console.log("Logged Out")
    }
    
    useEffect(() => storeUser(),[])

    const loginHandle = async (event) => {
        event.preventDefault()
        console.log("Login Form Submitted", username, password)

        try {
            const user = await loginService.login({username, password})
            console.log("User:",user)

            window.localStorage.setItem("loggedUser", JSON.stringify(user))

            postService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
            console.log("Logged in")
        }
        catch (exception) {
            setErrorMessage('Wrong Credentials')
            setTimeout(() => {setErrorMessage(null)}, 5000)
        }
    }

    const loginForm = () => (
      <LoginForm
      username={username}
      password={password}
      handleUsername={({target}) => setUsername(target.value)}
      handlePassword={({target}) => setPassword(target.value)}
      handleSubmit={loginHandle}
      />
    )

    const postForm = () => (
      <PostForm user={user} updateFn={addNewPost}/>
    )

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/posts">All Posts</Link>
        <Link to="/users">Users</Link>
        {user === null ?
          null :
          <Link to={`/users/${getUser().id}`}>{user.username}</Link>}
      </div>

      <Switch>
        <Route path="/posts/:id">
          <PostID loggedUser={user} userFn={userService.getAll} postFn={postService.getAll}/>
        </Route>
        <Route path="/posts">
          <PostList loggedUser={user} users={users} posts={posts}/>
        </Route>
        <Route path="/users/:id">
          <UserID loggedUser={user} userFn={userService.getAll} postFn={postService.getAll}/>
        </Route>
        <Route path="/users">
          <Users users={users}/>
        </Route>
        <Route path="/">
          {user === null ? 
            loginForm():
            <div>
              <p>{user.username} logged in</p>
              <button onClick={() => logout()}>Log Out</button>
              {postForm()}
            </div>
          }
          <Home user={user}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
