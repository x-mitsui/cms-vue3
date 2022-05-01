import { createRouter, createWebHashHistory } from 'vue-router'
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
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
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

/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  if (isChunkLoadFailed) {
    // 用路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环，而用 location.reload 方法，相当于触发F5刷新页面，虽然用户体验上来说会有刷新加载察觉，但不会导致页面卡死及死循环，从而曲线救国解决该问题
    location.reload()
    // const targetPath = $router.history.pending.fullPath;
    // $router.replace(targetPath);
  }
})

export default router
