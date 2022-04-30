import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalRegister from './global'
import x_request from './service'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

// 对象插件需要有install方法
app.use(router)
app.use(store)
app.use(globalRegister)
app.mount('#app')

console.log(process.env)

// interface DataType {
//   data: any
//   returnType: string
//   success: boolean
// }
// x_request
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'get',
//     interceptors: {
//       requestInterceptorOnFulfilled(config) {
//         console.log('单独请求的config')
//         return config
//       },
//       responseInterceptorOnFulfilled(res) {
//         console.log('单独响应的response')
//         return res
//       }
//     },
//     isShowLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// setTimeout(() => {
//   x_request.request({
//     url: '/home/multidata',
//     method: 'get'
//   })
// }, 3000)
