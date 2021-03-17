<template>
  <div class="wrapper">
    <van-empty
      class="empty"
      image="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_cart.png"
      description="登录后才能看到商品哦~"
      v-if="!isLogin"
    >
      <van-button round plain type="default" class="loginButton" to="login"
        >立即登录</van-button
      >
    </van-empty>

    <van-empty
      class="empty"
      image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
      description="您还没有选购商品~"
      v-if="isLogin && totalNum == 0"
    >
      <van-button round type="success" class="loginButton" to="home"
        >立即选购</van-button
      >
    </van-empty>

    <div class="not-empty" v-if="totalNum != 0">
      <van-card
        v-for="(item, i) in shopItem"
        :key="i"
        :price="(item.price / 100).toFixed(2)"
        :title="item.title"
        :thumb="item.img"
      >
        <template #num>
          <van-stepper v-model="item.num" />
        </template>
        <template #tag>
          <van-checkbox v-model="item.check" />
        </template>
      </van-card>
      <van-submit-bar :price="totalMoney" button-text="提交订单">
        <van-checkbox v-model="isAllCheck">全选</van-checkbox>
        <template #tip> 累积共选中{{ totalCheckNum }}商品</template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      checked: false,
      value: "",
    };
  },
  computed: {
    ...mapState("user", { isLogin: "token" }),
    ...mapState("cart", { shopItem: "shop" }),
    ...mapGetters("cart", [
      "totalNum",
      "totalCheckNum",
      "totalMoney",
      "isAllCheck",
    ]),
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
.not-empty {
  .van-submit-bar {
    bottom: 1rem;
  }
  .van-image{
    padding-left: 0.5rem;
  }
  .van-card__tag{
    top: 0.6rem;
  }
  .van-card__content{
    padding-left: 0.5rem;
  }
}
</style>
