import axios, { AxiosInstance } from 'axios'
import type { AxiosInterceptorConfig, AxiosRequestExConfig } from './type'
import { ElLoading } from 'element-plus'
// 手动引入loading的css
import 'element-plus/es/components/loading/style/css'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
const DEFAULT_LOADING = true
class Request {
  instance: AxiosInstance
  configs: AxiosRequestExConfig //扩展了hooks功能的AxiosRequestConfig
  interceptors?: AxiosInterceptorConfig
  loadingInstance?: LoadingInstance
  isShowLoading: boolean
  constructor(configs: AxiosRequestExConfig) {
    this.configs = configs
    this.interceptors = configs.interceptors
    this.instance = axios.create(configs)

    this.isShowLoading = configs.isShowLoading ?? DEFAULT_LOADING //?? 条件为undefined或null为真

    // 可配置的暴露出去的拦截器，针对的是具体的实例
    this.instance.interceptors.request.use(
      configs.interceptors?.requestInterceptorOnFulfilled,
      configs.interceptors?.requestInterceptorOnRejected
    )

    this.instance.interceptors.response.use(
      configs.interceptors?.responseInterceptorOnFulfilled,
      configs.interceptors?.responseInterceptorOnRejected
    )

    // 所有实例都会执行的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('公用request拦截')
        if (this.isShowLoading) {
          this.loadingInstance = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: '请求中......',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }

        return config
      },
      (err) => err
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('公用response拦截')
        if (this.isShowLoading) {
          setTimeout(() => {
            this.loadingInstance?.close()
          }, 1000)
        }
        // console.log('res:', res)
        return res.data
      },
      (err) => {
        if (this.isShowLoading) {
          setTimeout(() => {
            this.loadingInstance?.close()
          }, 1000)
        }
        if (err.response.status === 404) {
          console.log('404错误')
        }
      }
    )
  }
  // 请求，AxiosRequestExConfig的模板类型为T
  request<T>(configs: AxiosRequestExConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 可配置的 暴露出去的 单个请求的拦截器
      if (configs.interceptors?.requestInterceptorOnFulfilled) {
        // 通过配置调整单个请求拦截的configs值
        configs = configs.interceptors.requestInterceptorOnFulfilled(configs)
      }

      if (configs.isShowLoading === false) {
        this.isShowLoading = false
      }
      this.instance
        .request<any, T>(configs)
        .then((value) => {
          if (configs.interceptors?.responseInterceptorOnFulfilled) {
            // 通过配置调整单个响应拦截的值
            value = configs.interceptors.responseInterceptorOnFulfilled(value)
          }
          // 恢复，避免影响其他请求
          this.isShowLoading = DEFAULT_LOADING
          console.log('单响应拦截：', value)
          resolve(value)
        })
        .catch((err) => {
          this.isShowLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: AxiosRequestExConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: AxiosRequestExConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: AxiosRequestExConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: AxiosRequestExConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Request
