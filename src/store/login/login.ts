import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenus
} from '@/service/login/login'
import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import { IAccount, IUserInfo } from '@/service/login/types'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: IUserInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, menus: any) {
      state.userMenus = menus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 登录获取token
      const res = await accountLoginRequest(payload)
      const { id, token } = res.data
      commit('changeToken', token)
      localCache.set('token', token)
      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.set('userInfo', userInfo) //登陆过(token未过期)就直接用此数据展示

      // 请求用户菜单
      const userMenusResult = await requestUserMenus(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserInfo', userMenus)
      localCache.set('userMenus', userMenus)

      // 跳到首页
      router.push({ path: '/main' })
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('payload:', payload)
    },
    reloadLocalLoginInfo({ commit }) {
      const token = localCache.get('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.get('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.get('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
