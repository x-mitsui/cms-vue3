<template>
  <el-form label-width="60px" :rules="rules" :model="account" ref="FormRef">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input show-password v-model="account.password" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
// 某些情况，如果account是父组件传过来的对象，子组件不能直接修改，不符合单向数据流思想
export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.get('name'),
      password: localCache.get('password')
    })

    const FormRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isRemeber: boolean) => {
      console.log('loginAction:', 'loginAction')
      FormRef.value?.validate((isValid) => {
        if (isValid) {
          console.log('帕丁顿')
          // 是否需要记住密码
          if (isRemeber) {
            localCache.set('name', account.name)
            localCache.set('password', account.password)
          } else {
            localCache.delete('name')
            localCache.delete('password')
          }
          // 开始验证登录
        }
      })
    }

    return {
      account,
      rules,
      FormRef,
      loginAction
    }
  }
})
</script>

<style scoped>
.el-form-item {
  margin-top: 20px;
}
</style>
