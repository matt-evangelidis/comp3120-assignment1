import axios from 'axios';
const baseURL = "/api/"

const getAll = () => {
    return axios.get(baseURL + "posts")
                .then(response => response.data)
}

const create = async(newObject) => {
    console.log("axios post")
    return axios.post(baseURL + "posts", newObject)
                .then(response => response.data)
}

const update = (post) => {
    return axios.put(baseURL + "posts", post)
                .then(response => response.data)
}

export default {getAll, create, update}