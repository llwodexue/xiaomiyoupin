<template>
  <div class="wrapper" ref="wrapper">
    <!-- 轮播图 -->
    <swiper :banner="bannerList"></swiper>
    <!-- 金刚位10个 -->
    <king-kong :kingkong="kingkongList"></king-kong>
    <!-- 有品头条图 -->
    <hot-spot :hot="hotspotList"></hot-spot>
    <!-- 每日热点图4个 -->
    <plaza-new :plaza="plazaList"></plaza-new>
    <!-- 上新精选 -->
    <prod-new :prodnew="prodnewList"></prod-new>
    <!-- 分类列表 -->
    <van-tabs class="tabs-box" :before-change="changeQuery">
      <van-tab
        v-for="(item, index) in tabConfigList"
        :title="item.title"
        :key="index"
      >
        <home-list :product="productList"></home-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Swiper from "./Swiper";
import KingKong from "./KingKong";
import HotSpot from "./HotSpot";
import PlazaNew from "./PlazaNew";
import ProdNew from "./ProdNew";
import HomeList from "./HomeList";
import { throttle, win } from "@/utils";
export default {
  name: "Home",
  components: {
    Swiper,
    KingKong,
    HotSpot,
    PlazaNew,
    ProdNew,
    HomeList,
  },
  data() {
    return {
      bannerList: [],
      kingkongList: [],
      plazaList: [],
      hotspotList: [],
      prodnewList: [],
      tabConfigList: [],
      productList: [],
      page: 1,
      queryId: "",
      tabIndex: 0,
    };
  },
  async created() {
    await this.$axios.getHomepage().then((res) => {
      res.forEach((item) => {
        let key = item.module_key;
        let data = item.data;
        switch (key) {
          case "declare_banner_new":
            this.bannerList = data.items;
            break;
          case "kingkong_new":
            this.kingkongList = data.items;
            break;
          case "plaza_new":
            this.plazaList = data.rows[0].items;
            break;
          case "image_link_map":
            this.hotspotList.push(data._hotspot);
            break;
          case "product_hot_new":
            this.prodnewList = data;
            break;
          case "slide_flow":
            this.tabConfigList = data.items;
            break;
        }
      });
    });
    this.getHomeFeed();
  },
  mounted() {
    window.addEventListener("scroll", throttle(this.scrollBottom, 200), true); // 开启捕获
  },
  methods: {
    changeQuery(index) {
      if (index == this.tabIndex) return;
      this.tabIndex = index;
      this.queryId = this.tabConfigList[index].query_id;
      this.productList = [];
      this.getHomeFeed();
      return true;
    },
    getHomeFeed() {
      this.$axios.getHomeFeeds(this.page, this.queryId).then((res) => {
        res.items.slice(0, 10).forEach((item) => {
          this.productList.push(item);
        });
      });
    },
    scrollBottom(e) {
      try {
        let scrollT = e.target.scrollTop;
        let winH = win("clientHeight");
        let wrapperH = this.$refs.wrapper.clientHeight;
        if (scrollT + winH + 100 >= wrapperH) {
          this.page++;
          this.getHomeFeed();
        }
      } catch {
        return;
      }
    },
  },
};
</script>
<style lang="less">
.tabs-box {
  margin: 0.3rem 0;
  .van-tabs__wrap {
    height: 0.6rem;
    .van-tabs__nav {
      background: #f4f4f4;
      .van-tab {
        color: #000;
        font-size: 0.3rem;
        font-weight: bold;
        width: 1.9rem;
        border-right: 0.01rem solid rgba(0, 0, 0, 0.1);
      }
      .van-tab--active {
        color: #c30d23;
        font-size: 0.32rem;
      }
      .van-tabs__line {
        background: #c30d23;
        width: 0.46rem;
      }
    }
  }
}
</style>
