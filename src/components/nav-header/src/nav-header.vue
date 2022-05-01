<template>
  <div class="nav-header">
    <el-icon
      :size="size"
      v-show="!isFold"
      class="f-icon"
      @click="handleFoldClick"
    >
      <fold />
    </el-icon>
    <el-icon v-show="isFold" class="f-icon" @click="handleFoldClick">
      <expand />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const size = ref('30px')
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      size,
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .f-icon {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
