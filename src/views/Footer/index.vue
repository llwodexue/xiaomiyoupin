<template>
  <div class="footer">
    <van-tabbar v-model="active" route active-color="#845d32" class="tabbar">
      <van-tabbar-item
        v-for="(item, i) in navs"
        :key="i"
        :to="item.path"
        :icon="item.meta.icon"
        >{{ item.meta.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import routes from "@/router/routes";
export default {
  name: "Footer",
  data() {
    return {
      navs: [],
      active: 0
    };
  },
  created() {
    this.navs = routes.filter(item => {
      if (item.meta) return item.meta.isTabBar;
    });
  }
};
</script>
<style lang="less" scoped>
/deep/ .van-tabbar--fixed {
  position: relative !important;
}
.footer {
  height: 50px;
  .tabbar {
    display: flex;
  }
}
</style>
