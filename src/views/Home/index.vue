<template>
  <div class="wrapper">
    <swiper :banner="bannerList"></swiper>
  </div>
</template>

<script>
import Swiper from "./components/Swiper";
import homeApi from "@/api/home.js";
export default {
  name: "Home",
  components: {
    Swiper,
  },
  data() {
    return {
      bannerList: [],
    };
  },
  created() {
    homeApi.banner().then((res) => {
      console.log(res);
      this.bannerList = res;
    });
  },
};
</script>

<style lang="less" scoped>
</style>
