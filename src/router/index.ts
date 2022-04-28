import { createRouter, createWebHistory } from 'vue-router'
// type指明引入的只是类型，不加也可以
import type { RouteRecordRaw } from 'vue-router'

// routes类型可通过createRouter查找
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
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

export default router
