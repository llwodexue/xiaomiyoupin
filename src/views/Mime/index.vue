<template>
  <div class="wrapper">
    <van-cell class="login" v-if="!isLogin" :to="userInfo.to">
      <template #title>
        <img :src="userInfo.img" alt="" class="avatar" />
        <span class="please">{{ userInfo.name }}</span>
        <img :src="userInfo.icon" alt="" class="back" />
      </template>
    </van-cell>
    <van-cell title="我的订单" is-link class="order" to="home"></van-cell>
    <div class="focus">
      <div v-for="(item, i) in focusList" :key="i" class="focusList">
        <img :src="item.img" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <van-cell
      v-for="(item, i) in tabList"
      :key="i"
      :title="item.name"
      :to="item.to"
      :icon="item.icon"
      is-link
      class="tabList"
    ></van-cell>
  </div>
</template>

<script>
export default {
  name: "Mime",
  data() {
    return {
      userInfo: {
        img:
          "https://img.youpin.mi-img.com/shopcenter/415b0fd8150f58ee2b85caa2ee9cef8f.png",
        name: "请登录",
        icon:
          "https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_right_darkgray.png",
        to: "login",
      },
      focusList: [
        {
          img:
            "https://img.youpin.mi-img.com/shopcenter/1su4kcv21eg_22212270231600948691418.png",
          name: "待付款",
        },
        {
          img:
            "https://img.youpin.mi-img.com/shopcenter/2rsi345c8a_22212270231600948691450.png",
          name: "待收货",
        },
        {
          img:
            "https://img.youpin.mi-img.com/shopcenter/n9q7tuhs6ao_22212270231600948691455.png",
          name: "评价",
        },
        {
          img:
            "https://img.youpin.mi-img.com/shopcenter/q69ib1u9teg_22212270231600948691439.png",
          name: "退款/售后",
        },
      ],
      tabList: [
        {
          icon:
            "https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_myassets.png",
          name: "我的权益",
          to: "home",
        },
        {
          icon:
            "https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_coupon_new.png",
          name: "优惠券",
          to: "home",
        },
        {
          icon:
            "https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_collection.png",
          name: "我的收藏",
          to: "home",
        },
        {
          icon:
            "https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_address.png",
          name: "地址管理",
          to: "home",
        },
        {
          icon:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_0556651f21ebb90fd2094de25cfeeeff.png&w=114&h=114",
          name: "资质证照",
          to: "home",
        },
        {
          icon:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_eec55569c325c1641e1cd47ba572b83b.png&w=114&h=114",
          name: "协议规则",
          to: "home",
        },
        {
          icon:
            "https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_feedback.png",
          name: "帮助与反馈",
          to: "home",
        },
      ],
    };
  },
  created() {},
  computed: {
    isLogin() {
      return this.$store.state.user.token;
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  .login {
    height: 2rem;
    background: #845f3f;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    .van-cell__title {
      display: flex;
      align-items: center;
      .avatar {
        width: 1.2rem;
        height: 1.2rem;
      }
      .please {
        color: #fff;
        font-size: 0.28rem;
        padding-left: 0.2rem;
        display: inline-block;
        width: 4.8rem;
      }
      .back {
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }

  .order {
    padding-left: 0.4rem;
  }

  .focus {
    display: flex;
    flex-direction: row;
    background: #fff;
    margin: 0.05rem 0 0.1rem;
    justify-content: space-evenly;
    .focusList {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
      color: rgba(0, 0, 0, 0.6);
      font-size: 0.26rem;
    }
  }

  .tabList {
    height: 1rem;
    img {
      width: 0.76rem;
      height: 0.76rem;
      margin-top: -0.14rem;
    }
  }
}
</style>
