<template>
  <div class="wrapper">
    <van-empty
      class="empty"
      image="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_cart.png"
      description="登录后才能看到商品哦~"
      v-if="!isLogin"
    >
      <van-button
        round
        plain
        type="default"
        class="loginButton"
        @click="toLogin"
        >立即登录</van-button
      >
    </van-empty>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return this.$store.state.user.token;
    },
  },
  methods: {
    toLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="less">
.empty {
  .van-empty__image {
    width: 1.8rem;
    height: 1.8rem;
  }
  .loginButton {
    border: 1px solid #000;
  }
}
</style>
