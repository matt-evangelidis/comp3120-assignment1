const express = require('express')  
const fs = require("fs")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//parse JSON file into memory
const rawData = fs.readFileSync("server/sampledata1.json")
const data = JSON.parse(rawData)

const apiRouter = express.Router()

//variables for data
const users = data.users
const posts = data.posts

apiRouter.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

apiRouter.get('/api/users', (req, res) => {
    res.json(users)
})

apiRouter.get('/api/posts', (req, res) => {
  res.json(posts)
})

module.exports = apiRouter