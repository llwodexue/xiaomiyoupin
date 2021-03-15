<template>
  <div class="wrapper">
    <van-sidebar v-model="activeKey" class="van-sidebar" @change="onChange">
      <van-sidebar-item
        v-for="(item, i) in categoryList"
        :key="i"
        :title="item.name"
      />
    </van-sidebar>

    <div class="right">
      <img :src="categoryDetail.banner" class="banner" />
      <div
        class="productList"
        v-for="(item, i) in categoryDetail.children"
        :key="i"
      >
        <div class="name">{{ item.name }}</div>
        <div class="productBox">
          <div class="item" v-for="(pro, index) in item.children" :key="index">
            <img :src="pro.smallImgCard.img" />
            <span class="text van-ellipsis">{{ pro.smallImgCard.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
      activeKey: 0,
      categoryDetail: [],
    };
  },
  methods: {
    onChange(index) {
      let id = this.categoryList[index].id;
      this.Detail(id);
    },
    Detail(id) {
      this.$axios.getCategoryDetail(id).then((res) => {
        this.categoryDetail = res;
      });
    },
  },
  created() {
    this.$axios.getCategoryList().then((res) => {
      this.categoryList = res;
      let id = this.categoryList[this.activeKey].id;
      this.Detail(id);
    });
  },
};
</script>

<style lang="less">
.van-sidebar {
  position: fixed;
  height: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .van-sidebar-item {
    padding: 0.26rem 0.1rem;
    text-align: center;
    background-color: #fff;
    font-size: 0.28rem;
    color: #777;
  }

  .van-sidebar-item--select {
    color: #fff;
    &::before {
      display: none;
    }
    .van-sidebar-item__text {
      background: linear-gradient(
        to right,
        rgb(230, 170, 92),
        rgb(208, 139, 48)
      );
      border-radius: 0.2rem;
      width: 100%;
      padding: 0.03rem 0;
    }
  }
}

.right {
  margin-left: 1.6rem;
  background-color: #f4f4f4;
  padding: 0.1rem 0.2rem 0;
  .banner {
    width: 100%;
    border-radius: 0.2rem;
  }

  .productList {
    background-color: #fff;
    padding: 0.2rem;
    border-radius: 0.2rem;
    margin-top: 0.2rem;
    .name {
      margin-bottom: 0.1rem;
      padding-left: 0.2rem;
      font-size: 0.28rem;
      font-weight: bold;
      color: #333;
    }
    .productBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 28%;
        img {
          width: 100%;
          border-radius: 0.1rem;
          background: #f8f8f8;
        }
        .text {
          font-size: 0.24rem;
          margin-top: 0.12rem;
          color: #777;
        }
      }
    }
  }
}
</style>
