import axios from 'axios';
const baseURL = "/api/posts"

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    return axios.get(baseURL)
                .then(response => response.data)
}

const getPost = async (postId) => {
    const response = await axios.get(baseURL + '/' + postId)
    return response.data
}

const likePost = async (user, postId) => {
    console.log("Logged User:", user)
    console.log("Post ID:", postId)
    const data = {
        user: user,
        postId: postId
    }
    const response = await axios.put(baseURL + '/like', data)
    console.log("Liked Post:", response.data)
    return response.data
}

const unlikePost = async (user, postId) => {
    console.log("Logged User:", user)
    console.log("Post ID:", postId)
    const data = {
        user: user,
        postId: postId
    }
    const response = await axios.put(baseURL + '/unlike', data)
    console.log("Unliked Post:", response.data)
    return response.data
}

const create = async (newObject) => {
    const config = {
        headers: {Authorization: token},
    }

    const response = await axios.post(baseURL, newObject, config)
    return response.data
}

const update = (post) => {
    return axios.put(baseURL, post)
                .then(response => response.data)
}

export default {getAll, getPost, likePost, unlikePost, create, update, setToken}