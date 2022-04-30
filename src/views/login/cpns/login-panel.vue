<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <!-- 使用具名插槽label -->
        <template #label>
          <span>
            <el-icon color="#409EFC"><user-filled /></el-icon>账号登录
          </span>
        </template>
        <h2>账号登录</h2>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>手机登录
          </span>
        </template>
        <h2>手机登录</h2>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {}
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
}
</style>
