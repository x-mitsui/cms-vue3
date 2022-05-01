import Request from './request'
import { baseURL, timeout } from './request/config'
import localCache from '@/utils/cache'

const x_request = new Request({
  baseURL,
  timeout,
  interceptors: {
    requestInterceptorOnFulfilled(config) {
      // console.log('实例request拦截')
      const token = localCache.get('token')
      if (token) {
        if (config.headers) config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorOnRejected(err) {
      return err
    },
    responseInterceptorOnFulfilled(res) {
      // console.log('实例response拦截')
      return res
    },
    responseInterceptorOnRejected(err) {
      return err
    }
  }
})

export default x_request

/**
 * url?: string;
  method?: Method;
  baseURL?: string;
  transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[];
  transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[];
  headers?: AxiosRequestHeaders;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: D;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  responseEncoding?: responseEncoding | string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
  decompress?: boolean;
  transitional?: TransitionalOptions;
  signal?: AbortSignal;
  insecureHTTPParser?: boolean;
 */
