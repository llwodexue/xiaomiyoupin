<template>
  <div class="product">
    <div class="product-item" v-for="(item, index) in product" :key="index">
      <div v-if="item.data.goods">
        <router-link
          :to="{ name: 'item', query: { gid: item.data.goods.gid } }"
        >
          <div class="product-img">
            <img :src="item.data.goods.img800s" alt="" />
          </div>
          <div class="product-info">
            <p class="name" v-text="item.data.goods.name"></p>
            <p
              class="summary van-ellipsis"
              v-text="item.data.goods.summary"
            ></p>
            <div class="price">
              <span class="priceNow">{{
                item.data.goods.priceMin | filterMoney
              }}</span>
              <span class="priceOld">{{
                item.data.goods.marketPrice | filterMoney
              }}</span>
            </div>
          </div>
        </router-link>
      </div>

      <div v-else>
        <router-link :to="{ name: 'item', query: { gid: '107333' } }">
          <div class="product-img">
            <img src="@/assets/img/default.png" alt="" />
          </div>
          <div class="product-info">
            <p class="name">野蛮娃娃遥控跑车</p>
            <p class="summary van-ellipsis">给聪明孩子的遥控跑车</p>
            <div class="price">
              <span class="priceNow">{{ 24900 | filterMoney }}</span>
              <span class="priceOld">{{ 34900 | filterMoney }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="more">
      <div class="line"></div>
      <span class="txt">更多好物，敬请期待</span>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="less" scoped>
.product {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  .product-item:nth-child(odd) {
    margin-left: 3%;
    margin-right: 2%;
  }
  .product-item {
    width: 46%;
    border-radius: 0.1rem;
    margin-bottom: 2%;
    overflow: hidden;
    background-color: #fff;
    .product-img {
      img {
        display: block;
        width: 100%;
      }
    }
    .product-info {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-left: 0.1rem;
      .name {
        font-size: 0.3rem;
        color: #333;
        line-height: 0.42rem;
        margin-top: 0.12rem;
      }
      .summary {
        font-style: normal;
        color: #999;
        font-size: 0.26rem;
        line-height: 0.36rem;
        margin-top: 0.04rem;
      }
      .price {
        height: 0.48rem;
        margin: 0.13rem 0;
        .priceNow {
          font-size: 0.34rem;
          color: #e30d0d;
          height: 0.4rem;
        }
        .priceOld {
          font-size: 0.28rem;
          margin-left: 0.15rem;
          color: #999;
          text-decoration: line-through;
        }
      }
    }
  }
  .more {
    display: flex;
    width: 100%;
    height: 3.2rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .txt {
      color: #999;
      font-size: 0.3rem;
      margin: 0 0.12rem;
    }
    .line {
      height: 1px;
      width: 1rem;
      background-color: #999;
    }
  }
}
</style>
