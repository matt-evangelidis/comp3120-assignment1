const express = require('express')
const cors = require('cors')
const fs = require("fs")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const apiRouter = require("./controllers/api")



const app = express()
app.use(cors())
app.use(express.json())
app.use(apiRouter)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})