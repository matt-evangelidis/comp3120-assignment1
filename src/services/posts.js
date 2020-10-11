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

export default {getAll, getPost, create, update, setToken}