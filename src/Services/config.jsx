import axios from 'axios';
// https://educate-api.vercel.app
const apiRequests = axios.create({
    baseURL: 'https://educate-api.vercel.app/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiRequests.interceptors.request.use(config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default apiRequests;