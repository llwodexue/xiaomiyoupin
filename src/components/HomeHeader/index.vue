<template>
  <div class="header">
    <img :src="img" class="logo" />
    <van-search
      v-model="value"
      placeholder="搜一搜"
      class="search"
      background="#F0F0F0"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      img:
        "https://img.youpin.mi-img.com/static/weex_images/v1/m/navi_title_v6.png",
      value: "",
    };
  },
  created() {},
};
</script>

<style lang="less" scoped>
.header {
  height: 56px;
  background-color: #845d32;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .logo {
    width: 36px;
    height: 28px;
    margin-left: 12px;
  }
  .van-search__content {
    background-color: transparent;
    padding-left: 0;
  }
  .search {
    height: 32px;
    border-radius: 16px;
    width: 100%;
    margin: 0 15px 0 10px;
  }
}
</style>
