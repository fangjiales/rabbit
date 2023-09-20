import axios from 'axios'

// axios 基础封装
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 拦截器

// 请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, err => Promise.reject(err))

// 响应拦截器
httpInstance.interceptors.response.use(res => res.data, err => Promise.reject(err))

export default httpInstance