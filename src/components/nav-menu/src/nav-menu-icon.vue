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

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    item: any
  }>(),
  {
    item: () => ({})
  }
)
</script>

<style scoped lang="less"></style>
