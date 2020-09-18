import axios from 'axios';
const baseURL = "/api/"

const getAll = () => {
    return axios.get(baseURL + "posts")
                .then(response => response.data)
}

// const getUserPost = (user) => {
//     return axios.get(baseURL + "")
//                 .then(response => response.data)
// }

export default {getAll}