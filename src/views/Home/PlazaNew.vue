<template>
  <div class="plaza">
    <div class="new" v-for="(item, i) in plaza" :key="i">
      <img :src="item.item.pic_url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["plaza"],
};
</script>

<style lang="less" scoped>
.plaza {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 0.24rem 0.2rem;
  .new {
    width: 24%;
    img {
      width: 100%;
      border-radius: 0.1rem;
    }
  }
}
</style>