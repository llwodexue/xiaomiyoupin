<template>
  <div class="homeHeader">
    <img :src="img" class="logo" />
    <input-search :disabled="true" :showAction="false"></input-search>
  </div>
</template>

<script>
import InputSearch from "@/components/InputSearch";
export default {
  name: "HomeHeader",
  components: {
    InputSearch,
  },
  data() {
    return {
      img:
        "https://img.youpin.mi-img.com/static/weex_images/v1/m/navi_title_v6.png",
    };
  },
};
</script>

<style lang="less">
.homeHeader {
  height: 1.12rem;
  background-color: #845d32;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .logo {
    width: 0.72rem;
    height: 0.56rem;
    margin-left: 0.24rem;
  }
  input::-webkit-input-placeholder {
    color: #333;
  }
}
</style>
