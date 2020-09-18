import axios from 'axios';
const baseURL = "/api/"

const getAll = () => {
    return axios.get(baseURL + "users")
                .then(response => response.data)
}

const findUser = (users, post) => {
    const user = users.find(u => (u.id === post.user))
    console.log("Found user: ", user)
    return user
}

export default {getAll, findUser}