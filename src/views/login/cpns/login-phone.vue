<template>
  <el-form label-width="70px" :rules="rules" :model="phone">
    <el-form-item label="手机号" prop="number">
      <el-input v-model="phone.number" />
    </el-form-item>
    <el-form-item label="验证码" prop="verifyCode">
      <div class="code-wrapper">
        <el-input type="password" v-model="phone.verifyCode" />
        <el-button class="btn" type="primary">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      verifyCode: ''
    })

    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.el-form-item {
  margin-top: 20px;
  .code-wrapper {
    display: flex;
    justify-content: flex-start;
    .btn {
      margin-left: 8px;
    }
  }
}
</style>
