<template>
  <div class="wrapper">
    <div class="head">
      <van-cell
        class="back"
        is-link
        arrow-direction="left"
        to="mime"
      />欢迎登录小米有品
    </div>
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="username"
        name="user"
        placeholder="邮箱/手机号码/小米ID"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        placeholder="密码"
        name="pass"
        right-icon="eye"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="submit"
          >登录</van-button
        >
      </div>
      <van-nav-bar title="账号：user" />
      <van-nav-bar title="密码：123" />
    </van-form>
  </div>
</template>

<script>
import { passTrans } from "@/utils";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      values.pass = passTrans(values.pass);
      this.$store.dispatch("user/login", values).then(() => {
        let isLogin = this.$store.state.user.token;
        if (isLogin) {
          this.$notify({ type: "success", message: "登录成功" });
          setTimeout(() => {
            this.$router.go(-1);
          }, 500);
        } else {
          this.$notify({
            type: "danger",
            message: "账号/密码输入错误，请重新输入",
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  background: url("https://shop.io.mi-img.com/app/shop/img?id=shop_dfa89d9b977aa2f32346a1e2e3ecb838.png&w=750&h=1334")
    no-repeat center center/cover;
  padding: 1.2rem 0.92rem 0 0.92rem;

  .head {
    display: flex;
    font-size: 0.48rem;
    text-align: center;
    color: #666;
    margin: 0.32rem 0;
    .van-cell.back {
      background: transparent;
      border: none;
      width: 0.8rem;
      padding-top: 0;
      &::after {
        border: none;
      }
    }
  }
  .van-cell {
    border-bottom: 1px solid #ccc;
    padding: 0.36rem 0;
  }
  .submit {
    background: #dfb77a;
    border: none;
    margin-bottom: 0.28rem;
    font-size: 0.32rem;
  }
}
</style>
