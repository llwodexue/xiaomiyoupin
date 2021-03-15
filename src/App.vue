<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div class="main">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <router-view name="footer" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="less">
html,
body {
  height: 100%;
  background: #f4f4f4;
}
html {
  font-size: 100px;
}
body {
  font-size: 0.14rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 750px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow-x: hidden;
    margin-bottom: 1rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

