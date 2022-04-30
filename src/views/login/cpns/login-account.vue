<template>
  <el-form label-width="60px" :rules="rules" :model="account">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="account.password" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'
// 某些情况，如果account是父组件传过来的对象，子组件不能直接修改，不符合单向数据流思想
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    return {
      account,
      rules
    }
  }
})
</script>

<style scoped></style>
