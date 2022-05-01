import { createStore, Store, useStore as useVuexStore } from 'vuex'

import loginModule from './login/login'
import { IRootState, IStoreType } from './types'

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

// 确定了泛型，缩小了useVuexStore()返回值范围
//
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
