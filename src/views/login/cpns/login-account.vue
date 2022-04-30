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
// 某些情况，如果account是父组件传过来的对象，子组件不能直接修改，不符合单向数据流思想
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    // 编写表单验证规则
    const rules = {
      name: [
        {
          //规则一
          required: true, // 会在input前添加*
          message: '用户名是必传内容', //name为空时提示信息
          trigger: 'blur' //触发时机，blur“失去焦点”或change
        },
        {
          //规则二
          pattern: /^[a-z0-9]{5,10}$/,
          message: '用户名必须是5-10个数字或字母',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '密码是必传内容', //name为空时提示信息
          trigger: 'blur' //触发时机，blur“失去焦点”或change
        },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '密码必须是3位以上的数字或字母',
          trigger: 'blur'
        }
      ]
    }
    return {
      account,
      rules
    }
  }
})
</script>

<style scoped></style>
