import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalRegister from './global'

import { reloadStore } from '@/store'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

// 对象插件需要有install方法
app.use(router)
app.use(store)
app.use(globalRegister)
// 刷新时恢复vuex数据
reloadStore()
app.mount('#app')

console.log(process.env)
