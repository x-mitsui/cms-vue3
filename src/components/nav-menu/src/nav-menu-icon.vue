<template class="nav-menu-icon">
  <el-icon v-if="item.icon.includes('monitor')">
    <monitor />
  </el-icon>
  <el-icon v-if="item.icon.includes('setting')">
    <setting />
  </el-icon>
  <el-icon v-if="item.icon.includes('goods')">
    <goods />
  </el-icon>
  <el-icon v-if="item.icon.includes('chat-line-round')">
    <chat-line-round />
  </el-icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
