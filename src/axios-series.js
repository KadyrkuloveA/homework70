import axios from 'axios';

const axiosSeries = axios.create({
    baseURL: 'http://api.tvmaze.com/'
});

axiosSeries.interceptors.request.use(req => {
    return req;
});

axiosSeries.interceptors.response.use(res => {
    return res;
}, err => {
    throw err;
});

export default axiosSeries;