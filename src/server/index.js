
import axios from 'axios';
import qs from 'qs';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const baseURL = 'http://localhost:8080';
axios.defaults.baseURL = baseURL;


//POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'get') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
    if (!res) { return Promise.reject(res); }
    return res;
}, (error) => {
    return Promise.reject(error);
});

export function Post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function Get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: param
        })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
