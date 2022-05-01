import { createRouter, createWebHistory } from 'vue-router'
// type指明引入的只是类型，不加也可以
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

// routes类型可通过createRouter查找
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main' //默认跳到首页，没登录状态就跳到登录页
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  // 判断是否登录
  if (to.path === '/login') {
    next()
  } else {
    // 判断是否有token
    const token = localCache.get('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
