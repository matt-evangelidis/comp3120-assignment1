const postsRouter = require('express').Router()
const Post = require('../models/post')
const User = require('../models/user')

//get all posts
postsRouter.get('/', async (request, response) => {
    const posts = await Post.find({})
    response.json(posts)
})

//create new post (takes content and the userId)
postsRouter.post('/', async (request, response) => {
    const body = request.body
    console.log("postsRouter request:", body)
    const user = await User.findById(body.user.id)
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