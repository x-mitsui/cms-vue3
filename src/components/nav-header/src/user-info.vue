<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :icon="UserFilled" size="small" />
        <span>{{ name }}</span>
        <!-- <el-icon><arrow-down /></el-icon> -->
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { UserFilled } from '@element-plus/icons-vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.loginModule.userInfo.name)
    return { name, UserFilled }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
</style>
