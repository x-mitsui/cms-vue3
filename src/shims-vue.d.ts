/* eslint-disable */
/**
 * shims-vue.d.ts的作用
 * 为了【typescript类型检查】做的适配【自定义声明文件】，
 * 因为.vue 文件不是一个常规的文件类型，ts 不理解 vue 文件是干嘛的，
 * 加这一段是是告诉 ts，".vue"导出的都为component对象（遵循DefineComponent类型）
 * 可以把这一段删除，会发现 import 的所有 vue 类型的文件都会报错。
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let $store: any
