<template>
  <div class="kingkong">
    <div class="kingkong-item" v-for="item in kingkong" :key="item.iid">
      <img :src="item.item.pic_url" alt="" />
      <span v-text="item.item.title"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["kingkong"],
};
</script>

<style lang="less" scoped>
.kingkong {
  height: 3.6rem;
  box-sizing: border-box;
  padding-top: 0.28rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .kingkong-item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 1rem;
      width: 1rem;
    }
    span {
      color: #000;
      line-height: 0.34rem;
      margin-top: 0.1rem;
      font-size: 0.24rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>