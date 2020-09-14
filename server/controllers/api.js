const express = require('express')  
const fs = require("fs")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const rawData = fs.readFileSync("server/sampledata1.json")
const data = JSON.parse(rawData)

const apiRouter = express.Router()


apiRouter.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

apiRouter.get('/api/users', (req, res) => {
    res.json(data.users)
})

module.exports = apiRouter