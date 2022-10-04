import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.230.194.222:5000',
    // baseURL: 'http://localhost:5000',

})

export default api;