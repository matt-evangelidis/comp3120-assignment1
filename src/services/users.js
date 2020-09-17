import axios from 'axios';
const baseURL = "/"

const getAll = () => {
    return axios.get(baseURL + "users")
                .then(response => response.data)
}

const findUser = (users, post) => {
    const user = users.filter(u => u.id === post.user)
    console.log("Found user: ", user)
}

export default {getAll, findUser}