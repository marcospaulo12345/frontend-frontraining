import axios from 'axios';

const api = axios.create({
    baseURL: 'http://15.229.7.196:5000',
    // baseURL: 'http://localhost:5000',

})

export default api;