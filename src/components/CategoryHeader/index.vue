<template>
  <div class="wrapper">
    <van-nav-bar title="分类">
      <template #right>
        <van-icon
          name="search"
          size="18"
          @click="$router.push({ name: 'popup' })"
        />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "CategoryHeader",
};
</script>

<style lang="less">
.header {
  height: 0.9rem;
  background: #fff;
  margin-bottom: 0.03rem;
}
</style>
