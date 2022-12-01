import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const baseURL: string = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const request = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (error:any) => {
  return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use((res:AxiosResponse) => {
  return res
}, (error:any) => {
  return Promise.reject(error)
})

export default request
