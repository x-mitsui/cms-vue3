/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface AxiosInterceptorConfig<T = AxiosResponse> {
  requestInterceptorOnFulfilled?: (
    value: AxiosRequestConfig
  ) => AxiosRequestConfig
  requestInterceptorOnRejected?: (err: any) => any
  responseInterceptorOnFulfilled?: (value: T) => T
  responseInterceptorOnRejected?: (err: any) => any
}
// 运用了继承方式扩展AxiosRequestConfig
interface AxiosRequestExConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: AxiosInterceptorConfig<T>
  isShowLoading?: boolean
}

export { AxiosInterceptorConfig, AxiosRequestExConfig }
