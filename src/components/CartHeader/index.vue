<template>
  <div class="wrapper">
    <van-cell class="title">
      <template #title>
        <img :src="src" class="back" />
        <span>购物车</span>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "CartHeader",
  data() {
    return {
      src:
        "https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_left_white2.png",
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  height: 1.76rem;
  background: url("https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/common/bg_page_header.png")
    no-repeat center center/cover;
  .van-cell__title {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .back {
      width: 0.84rem;
      height: 0.84rem;
      position: absolute;
      left: 0;
    }
    span {
      color: #fff;
      font-size: 0.4rem;
      font-weight: bold;
    }
  }
}
</style>
