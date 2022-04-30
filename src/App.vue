<template>
  <div id="app">
    <!-- {{ $store.state.name }} -->

    <!-- <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import login from './views/login'
// import main from './views/main'

export default defineComponent({
  name: 'App',
  components: {
    // login,
    // main
  }
})
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
