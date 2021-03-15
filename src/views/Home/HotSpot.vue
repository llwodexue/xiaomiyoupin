<template>
  <div class="hotspot">
    <div class="hot" v-for="(item, i) in hot" :key="i">
      <img :src="item.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["hot"],
};
</script>

<style lang="less" scoped>
.hot {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.2rem;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  image {
    display: block;
    width: 100%;
  }
}
</style>