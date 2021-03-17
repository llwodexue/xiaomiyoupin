<template>
  <div class="prod-new" v-if="prodnew">
    <div class="pro-title">
      <span class="title" v-text="prodnew.title"></span>
      <span class="more">更多></span>
    </div>

    <van-tabs class="prod-box">
      <van-tab class="tab-box" v-for="item in prodnew.items" :key="item.iid">
        <template #title>
          <img :src="item.item.pic_url" alt="" />
          <p class="name" v-text="item.item.name"></p>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: ["prodnew"],
};
</script>

<style lang="less">
.prod-new {
  background: #fff;
  border-radius: 0.1rem;
  margin: 0.2rem;
  padding-bottom: 0.14rem;
  .pro-title {
    padding: 0.2rem 0 0.2rem 0.3rem;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 0.36rem;
      font-weight: bold;
    }
    .more {
      font-size: 0.2rem;
      color: #999999;
      margin-right: 0.3rem;
      padding-top: 0.1rem;
    }
  }

  .prod-box {
    .van-tabs__wrap {
      height: 2.7rem;
      .van-tab {
        width: 1.9rem;
        margin-right: 0.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 1.8rem;
          width: 1.8rem;
        }
        .name {
          font-size: 0.18rem;
          padding: -0.1rem 0.1rem;
          box-sizing: border-box;
          text-align: center;
        }
        &:nth-child(1) {
          background: #edf6f8;
        }
        &:nth-child(2) {
          background: #fcf7f1;
        }
      }
    }
    .van-tabs__line {
      display: none;
    }
  }
}
</style>