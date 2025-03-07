
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Sesuaikan dengan URL backend-mu
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
