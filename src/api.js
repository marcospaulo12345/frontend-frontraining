import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cba4-168-90-89-102.ngrok-free.app',
    // baseURL: 'http://localhost:5000',

})

export default api;