import axios from 'axios';
const baseURL = "/api/"

const getAll = () => {
    return axios.get(baseURL + "users")
                .then(response => response.data)
}

export default {getAll}