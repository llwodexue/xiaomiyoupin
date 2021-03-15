<template>
  <div class="product">
    <div class="product-item" v-for="(item, index) in product" :key="index">
      <div v-if="item.data.goods">
        <div class="product-img">
          <img :src="item.data.goods.img800s" alt="" />
        </div>
        <div class="product-info">
          <p class="name" v-text="item.data.goods.name"></p>
          <p class="summary van-ellipsis" v-text="item.data.goods.summary"></p>
          <div class="price">
            <span class="priceNow">{{
              item.data.goods.priceMin | filterMoney
            }}</span>
            <span class="priceOld">{{
              item.data.goods.marketPrice | filterMoney
            }}</span>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="product-img">
          <img src="@/assets/img/default.png" alt="" />
        </div>
        <div class="product-info">
          <p class="name">黑白调人体工学双腰拖护腰电脑椅</p>
          <p class="summary van-ellipsis">
            双腰托，科学护腰；翻转扶手，轻松收纳；透气网布，柔韧回弹
          </p>
          <div class="price">
            <span class="priceNow">{{ 34900 | filterMoney }}</span>
            <span class="priceOld">{{ 44900 | filterMoney }}</span>
          </div>
        </div>
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
