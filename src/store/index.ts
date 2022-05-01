import { createStore } from 'vuex'

import loginModule from './login/login'
import { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'test',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    loginModule
  }
})

// 解决问题：页面刷新时，vuex数据会丢失
export function reloadStore() {
  store.dispatch('loginModule/reloadLocalLoginInfo')
}

export default store
