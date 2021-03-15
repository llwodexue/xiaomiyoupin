<template>
  <div class="wrapper">
    <div class="head">欢迎登录小米有品</div>
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="username"
        placeholder="邮箱/手机号码/小米ID"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        placeholder="密码"
        right-icon="eye"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
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
      console.log("submit", values);
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
    font-size: 0.48rem;
    text-align: center;
    color: #666;
    margin: 0.32rem 0;
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
