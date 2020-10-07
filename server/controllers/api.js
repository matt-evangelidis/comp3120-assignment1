const express = require('express')  
const fs = require("fs")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/user')
const Post = require('../models/post')

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

//GET all posts
// apiRouter.get('/api/posts', (req, res) => {
//   res.json(posts)
// })

//GET all posts, from MongoDB
apiRouter.get('/api/posts', (req, res) => {
  Post.find({}).then(posts => {
    res.json(posts)
  })
})

module.exports = apiRouter