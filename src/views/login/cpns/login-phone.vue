<template>
  <el-form label-width="70px" :rules="rules" :model="phone" ref="FormRef">
    <el-form-item label="手机号" prop="number">
      <el-input v-model="phone.number" />
    </el-form-item>
    <el-form-item label="验证码" prop="verifyCode">
      <div class="code-wrapper">
        <el-input v-model="phone.verifyCode" />
        <el-button class="btn" type="primary">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/phone-config'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'

export default defineComponent({
  setup() {
    const store = useStore()
    const phone = reactive({
      number: localCache.get('number'),
      verifyCode: localCache.get('verifyCode')
    })

    const FormRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isRemeber: boolean) => {
      console.log('loginAction:', FormRef.value)
      FormRef.value?.validate((isValid) => {
        if (isValid) {
          console.log('帕丁顿')
          // 是否需要记住密码
          if (isRemeber) {
            localCache.set('name', phone.number)
            localCache.set('password', phone.verifyCode)
          } else {
            localCache.delete('name')
            localCache.delete('password')
          }
          // 开始验证登录
          store.dispatch('loginModule/phoneLoginAction', { ...phone })
        }
      })
    }

    return {
      phone,
      rules,
      FormRef,
      loginAction
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
