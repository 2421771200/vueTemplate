import axios from "axios";
let isOnline = null;//判断是否在本地（本地则只用代理）
if (window.location.hostname == "localhost" || window.location.hostname == "127.0.0.1"){
    isOnline = false
}else{
    isOnline = true
}

const service = axios.create({
    // baseURL: "apimine",
    baseURL: isOnline ? process.env.VUE_APP_URL : "apimine",
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 300000, // request timeout
    // timeout: 10, // request timeout
    // method: 'POST',
    
})
// 发送请求之前做什么
service.interceptors.request.use((config) => {
    // config.headers = {
    //     // "Content-Type": "multipart/form-data",
    //     // "Content-Type": "application/json"
    // }
    return config
})

// 添加响应拦截
service.interceptors.response.use((response) => {
    // 对响应的数据做什么
    return response.data
}, err => {
    // 对响应的错误做什么
    return Promise.reject(err)
})

export default service