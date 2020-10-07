require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fs = require("fs")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const apiRouter = require("./controllers/api")
const usersRouter = require('./controllers/users')
const postsRouter = require('./controllers/posts')

const app = express()
app.use(cors())
app.use(express.json())
app.use(apiRouter)
app.use('/api/users', usersRouter)
app.use('/api/posts', postsRouter)

const PORT = process.env.PORT || 3001
console.log(PORT)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})