<template>
  <van-search
    v-model="value"
    placeholder="搜一搜"
    class="input-search"
    :disabled="disabled"
    :show-action="showAction"
    background="#F0F0F0"
    @click="popUp"
  >
    <template #action>
      <div class="search-txt" @click="onCancel">取消</div>
    </template>
  </van-search>
</template>

<script>
export default {
  name: "InputSearch",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    showAction: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    popUp() {
      if (!location.hash.includes("#/popup")) {
        this.$router.push("/popup");
      }
    },
    onSearch() {},
    onCancel() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less">
.input-search {
  height: 0.64rem;
  border-radius: 0.32rem;
  margin: 0 0.24rem 0 0.22rem;
  display: flex;
  width: 100%;
  .van-search__content {
    background-color: transparent;
    padding-left: 0;
    .van-icon-search {
      font-size: 0.4rem;
      color: #c4c4c4;
    }
    input::-webkit-input-placeholder {
      font-size: 0.28rem;
    }
    .van-field__control {
      margin-left: 0.1rem;
    }
  }
  .van-search__action {
    background: linear-gradient(
      to right,
      rgb(240, 78, 46),
      rgb(213, 16, 16)
    ) !important;
    color: #fff;
    border-radius: 0.08rem;
  }
}
</style>
