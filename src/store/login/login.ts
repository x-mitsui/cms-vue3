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
import { mapMenuToRoutes } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '', //定义state数据的时候为空，不建议直接在此添加逻辑，如果有需求请通过mutations修改
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  // 对state的修改都要通过mutations
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: IUserInfo) {
      state.userInfo = userInfo
    },

    changeUserMenus(state, menus: any) {
      state.userMenus = menus
      // 每次设置完配置动态路由
      const routes = mapMenuToRoutes(menus)
      // console.log('routes:', routes)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 登录获取token
      const res = await accountLoginRequest(payload)
      const { id, token } = res.data
      commit('changeToken', token)
      localCache.set('token', token) //客户端控制有效期方法JSON.stringify({token,expireTime:..})
      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.set('userInfo', userInfo) //登陆过(token未过期)就直接用此数据展示

      // 请求用户菜单，也可以直接让后端获取token里id，然后查询用户菜单
      // 之所以提供id查询是因为：有可能超管会通过其它用户的id查询他的信息
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
