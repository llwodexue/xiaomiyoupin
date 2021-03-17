<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.iid">
        <img :src="item.item.pic_url" alt="" class="img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ["banner"],
};
</script>

<style lang="less">
.swiper {
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .van-swipe__indicators {
    left: 80%;
    align-items: flex-end;
    .van-swipe__indicator {
      background: #fff;
      border-radius: 0;
      width: 0.2rem;
      height: 0.1rem;
      margin-right: 3px;
      opacity: 1;
    }
    .van-swipe__indicator--active {
      height: 0.3rem;
      width: 0.2rem;
    }
  }
}
</style>
