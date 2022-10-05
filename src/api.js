import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.67.122.192:5000',
    // baseURL: 'http://localhost:5000',

})

export default api;