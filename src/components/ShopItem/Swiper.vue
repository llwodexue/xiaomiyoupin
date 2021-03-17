<template>
  <div>
    <div class="backBtn" @click="$router.go(-1)">
      <van-icon name="arrow-left" />
    </div>
    <div class="swipe" v-if="banner">
      <van-swipe @change="onChange" :autoplay="2000">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img :src="item.url" alt="" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/{{ banner.length }}
          </div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  props: ["banner"],
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.backBtn {
  cursor: pointer;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  z-index: 100;
  background: rgba(180, 180, 180, 0.7);
  padding: 0.1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .van-icon {
    color: #fff;
    font-size: 0.4rem;
  }
}
.swipe {
  img {
    height: 8rem;
  }
  .custom-indicator {
    position: absolute;
    right: 0.4rem;
    bottom: 0.6rem;
    padding: 0.08rem 0.12rem;
    border-radius: 0.3rem;
    font-size: 0.2rem;
    color: #fff;
    background: rgba(102, 102, 102, 0.4);
  }
}
</style>
