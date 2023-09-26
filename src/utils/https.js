import axios from 'axios'
import router from '@/router'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'

// axios 基础封装
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 拦截器

// 请求拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, err => Promise.reject(err))

// 响应拦截器
httpInstance.interceptors.response.use(res => res.data, err => {
  const userStore = useUserStore()
  ElMessage({
    type: 'warning',
    message: err.response.data.msg
  })
  if (err.response.status === 401) {
    userStore.cleanUserInfo()
    router.push('/login')
  }
  return Promise.reject(err)
})

export default httpInstance