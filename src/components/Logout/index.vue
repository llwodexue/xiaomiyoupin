<template>
  <div class="wrapper">
    <div class="head">
      <van-cell class="back" is-link arrow-direction="left" to="mime" />
    </div>
    <div class="account">
      <div class="desc">账号管理</div>
      <van-cell title="个人资料" is-link to="hoem" />
      <van-cell title="收货地址" is-link to="home" />
    </div>
    <div class="private">
      <div class="desc">隐私</div>
      <van-cell title="权限管理" is-link to="home" />
      <van-cell title="隐私政策" is-link to="home" />
    </div>
    <van-button round block type="info" @click="logout">退出账号</van-button>
  </div>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        let isLogin = this.$store.state.user.token;
        if (!isLogin) {
          this.$notify({ type: "success", message: "退出登录成功" });
          setTimeout(() => {
            this.$router.go(-1);
          }, 500);
        } else {
          this.$notify({ type: "danger", message: "服务器繁忙请稍后重试" });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  .back {
    display: flex;
  }
  .account,
  .private {
    .desc {
      font-size: 0.36rem;
      padding: 0.2rem 0.4rem;
    }
    .van-cell {
      font-size: 0.24rem;
    }
  }
  .van-button {
    background: #fff;
    color: #777;
    border: none;
    width: 90%;
    margin: 0.4rem auto;
    font-size: 0.3rem;
  }
}
</style>
