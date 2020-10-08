const jwt = require('jsonwebtoken')
const postsRouter = require('express').Router()
const Post = require('../models/post')
const User = require('../models/user')

//get all posts
postsRouter.get('/', async (request, response) => {
    const posts = await Post.find({})
    response.json(posts)
})

//get post by id
postsRouter.get('/:id', async (request, response) => {
    try { 
        const post = await Post.findById(request.params.id)
        if (post) {
            console.log("Retrieved post:", post)
            response.json(post)}
        else {
            response.status(404).end()
        }}
    catch (error) {
        console.log(error)
        response.status(400).send({error: 'bad id'})
    }
})

//token helper function
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

//create new post (takes content and the userId)
postsRouter.post('/', async (request, response) => {
    const body = request.body
    console.log("postsRouter request:", body)

    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})
    }
    
    const user = await User.findById(decodedToken.id)
    console.log("User:", user)

    const post = new Post({
        user: user.id,
        timestamp: new Date(),
        content: body.content
    })

    console.log("Processed request:",post)

    console.log("Saving Post")
    const savedPost = await post.save()
    user.posts = user.posts.concat(savedPost._id)
    await user.save()

    console.log("Post Saved!")
    response.json(savedPost)
})

module.exports = postsRouter