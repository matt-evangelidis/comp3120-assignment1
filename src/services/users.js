import axios from 'axios';
const baseURL = "/api/users"

const getAll = () => {
    return axios.get(baseURL)
                .then(response => response.data)
}

export default {getAll}