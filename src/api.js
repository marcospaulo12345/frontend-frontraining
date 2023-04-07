import axios from 'axios';

const api = axios.create({
    baseURL: 'https://2b49-177-66-117-187.ngrok-free.app',
    // baseURL: 'http://localhost:5000',

})

export default api;