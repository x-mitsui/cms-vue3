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
    <div class="content">
      <div>面包屑</div>
      <div>
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
export default defineComponent({
  components: {
    UserInfo
  },
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
  display: flex;
  width: 100%;
  .f-icon {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
