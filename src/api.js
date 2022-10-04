import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.231.189.130:5000',
    // baseURL: 'http://localhost:5000',

})

export default api;