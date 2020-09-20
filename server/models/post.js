//mongoose schema
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log("Connecting to", url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const postSchema = new mongoose.Schema({
  id: Number,
  user: String,
  timestamp: Date,
  content: String,
  likes: [String]
})

postSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Post = mongoose.model('Post', postSchema)

module.exports = Post