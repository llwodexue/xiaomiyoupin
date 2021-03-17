<template>
  <div class="wrapper">
    <Swiper :banner="bannerList" />

    <div class="prod-desc">
      <div class="price">{{ price | filterMoney }}</div>
      <div class="title" v-text="title"></div>
      <div class="desc" v-text="desc"></div>
    </div>

    <div class="goods-bar">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="badge" />
        <van-goods-action-icon
          :icon="isSave ? 'star' : 'star-o'"
          :text="isSave ? '已收藏' : '未收藏'"
          color="#ff5000"
          @click="isSave = !isSave"
        />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="addCart"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="$router.push({ name: 'cart' })"
        />
      </van-goods-action>
    </div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
    />
  </div>
</template>

<script>
import Swiper from "./Swiper";
import * as TYPES from "@/store/store-types";
import { mapGetters } from "vuex";
export default {
  name: "ShopItem",
  components: {
    Swiper,
  },
  data() {
    return {
      bannerList: [],
      desc: "",
      title: "",
      price: 0,
      isSave: false,
      show: false,
      sku: {
        tree: [],
        hide_stock: true,
        price: 0,
      },
      goods: {
        picture: "https://img01.yzcdn.cn/1.jpg",
      },
    };
  },
  computed: {
    ...mapGetters("cart", { badge: "totalNum" }),
  },
  methods: {
    addCart() {
      if (this.show) {
        let token = this.$store.state.user.token;
        if (!token) {
          this.$toast.fail("登录后才能添加购物车哦~");
          return;
        }
        let info = {
          price: this.price,
          img: this.goods.picture,
          title: this.title,
          gid: this.$route.query.gid,
        };
        this.$store.commit(`cart/${TYPES.ADD_CART}`, info);
      } else {
        this.show = true;
      }
    },
  },
  activated() {
    let gid = this.$route.query.gid;
    console.log(this.$store);
    this.$axios.detail(gid).then((res) => {
      console.log(res);
      let data = res.goods;
      this.bannerList = data.carouselMapList;
      this.bannerList.shift();
      this.desc = data.goodsInfo.summary;
      this.title = data.goodsInfo.name;
      this.price = data.goodsInfo.priceMin;
      this.goods.picture = data.goodsInfo.img800s;
      this.sku.price = data.goodsInfo.priceMin / 100;
    });
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  .prod-desc {
    padding-left: 0.24rem;
    .price {
      font-size: 0.52rem;
      line-height: 0.8rem;
      height: 0.8rem;
      color: #84731f;
      margin-bottom: 0.3rem;
    }
    .title {
      font-size: 0.36rem;
      line-height: 0.46rem;
      font-weight: 600;
    }
    .desc {
      font-size: 0.28rem;
      line-height: 0.46rem;
      color: #777;
    }
  }
  .van-goods-action {
    z-index: 3000;
  }
}
</style>
