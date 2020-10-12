import axios from 'axios';
const baseURL = "/api/users"

const getAll = () => {
    return axios.get(baseURL)
                .then(response => response.data)
}

//get user by id
const getUser = async (userId) => {
    const response = await axios.get(baseURL + '/' + userId)
    console.log("Response from getUser:",response.data)
    return response.data
}

export default {getAll, getUser}