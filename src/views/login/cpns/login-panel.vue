<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <!-- 使用具名插槽label -->
        <template #label>
          <span>
            <el-icon color="#409EFC"><user-filled /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isRemeber">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { defineComponent, ref } from 'vue'
/** 在vuex操作共享信息
 * 1.登录的逻辑（网络请求，拿到数据后的处理）
 * 2.数据保存到某个位置
 * 3.发送其它的请求（请求当前用户的信息）
 * 4.拿到用户的菜单
 * 5.跳到首页
 */
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isRemeber = ref(false)
    // InstanceType<typeof M>根据配置类型获取对应类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account') //对应el-tab-pane name属性

    function handleLoginClick() {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isRemeber.value)
      } else {
        phoneRef.value?.loginAction(isRemeber.value)
      }
    }
    return { isRemeber, handleLoginClick, accountRef, phoneRef, currentTab }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
  .el-tabs__item span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
}
</style>
