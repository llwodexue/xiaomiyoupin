<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

</style>

