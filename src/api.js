import axios from 'axios';

const api = axios.create({
    baseURL: 'https://f4cf-168-90-89-102.eu.ngrok.io',
    // baseURL: 'http://localhost:5000',

})

export default api;