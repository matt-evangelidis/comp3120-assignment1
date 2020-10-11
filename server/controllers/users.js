const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

//get all users
usersRouter.get('/', async (request, response) => {
    const users = await User
    .find({}).populate('posts', {content: 1, timestamp: 1})

    response.json(users)
})

//get user by id
usersRouter.get('/:id', async (request, response) => {
    try { 
        const user = await User.findById(request.params.id)
        if (user) {
            console.log("Retrieved user:", user)
            response.json(user)}
        else {
            response.status(404).end()
        }}
    catch (error) {
        console.log(error)
        response.status(400).send({error: 'bad id'})
    }
})

//create new user
usersRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        username: body.username,
        avatar: body.avatar,
        passwordHash,
    })

    const savedUser = await user.save()

    response.json(savedUser)
    console.log(response.json(savedUser))
})

module.exports = usersRouter