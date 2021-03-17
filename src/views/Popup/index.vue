<template>
  <div class="popup">
    <input-search class="search"></input-search>
  </div>
</template>

<script>
import InputSearch from "@/components/InputSearch";
export default {
  data() {
    return {};
  },
  components: {
    InputSearch,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.popup {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  .search {
    margin: 0.18rem 0 0.24rem 0.2rem;
    width: calc(100% - 0.5rem);
  }
}
</style>
