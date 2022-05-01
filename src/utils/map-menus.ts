import type { RouteRecordRaw } from 'vue-router'

export function mapMenuToRoutes(userMenus: any[]): RouteRecordRaw[] {
  //
  const routes: RouteRecordRaw[] = []

  // 1. 加载所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // 利用webpack工具动态加载, 参数2：是否递归查找
  const routeFiles = require.context('@/router/main', true, /\.tsx?$/)
  routeFiles.keys().forEach((routeFile) => {
    const route = require('@/router/main' + routeFile.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log('allRoutes:', allRoutes)

  // 2. 根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    menus.forEach((menu) => {
      if (menu.type === 1) {
        _recurseGetRoute(menu.children)
      } else {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      }
    })
  }
  _recurseGetRoute(userMenus)
  return routes
}
