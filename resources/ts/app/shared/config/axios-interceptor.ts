import axios from 'axios';

const onRequestSuccess = config => {
    const token = localStorage.getItem('__application_token') || sessionStorage.getItem('__application_token');
    if (token) {
        if (!config.headers) {
            config.headers = {};
        }
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.timeout = 1000000;
    config.url = `http://localhost:8000/${config.url}`;
    return config;
};
const setupAxiosInterceptors = onUnauthenticated => {
    const onResponseError = err => {
        const status = err.status || err.response.status;
        if (status === 403 || status === 401) {
            onUnauthenticated();
        }
        return Promise.reject(err);
    };
    if (axios.interceptors) {
        axios.interceptors.request.use(onRequestSuccess);
        axios.interceptors.response.use(res => res, onResponseError);
    }
};

export { onRequestSuccess, setupAxiosInterceptors };
