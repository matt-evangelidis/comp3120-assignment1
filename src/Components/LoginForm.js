import React, {useState} from 'react';

const LoginForm = ({user, setUser}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (event) => {
        event.preventDefault()
        console.log("Login Form Submitted", username, password)
    }
}