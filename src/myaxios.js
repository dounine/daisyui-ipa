import axios from 'axios';

let defaultApi = import.meta.env.VITE_API_HOST
let instance = axios.create({
    timeout: 1000 * 60 * 10,
    baseURL: defaultApi,
    headers: {
        "token": localStorage.getItem('token') || ''
    }
});
// instance.interceptors.response.use(
//     response => {
//         // 对响应数据做些什么
//         return response;
//     },
//     error => {
//         // 对响应错误做些什么
//         return Promise.reject(error);
//     }
// );

export default instance;