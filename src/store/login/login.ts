import { accountLoginRequest } from '@/service/login/login'
import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import { IAccount } from '@/service/login/types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 登录获取token
      const res = await accountLoginRequest(payload)
      const { id, token } = res.data
      commit('changeToken', token)
      //
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('payload:', payload)
    }
  }
}

export default loginModule
