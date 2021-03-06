import Footer from "@/views/Footer";
import HomeHeader from "@/components/HomeHeader";
import Home from "@/views/Home";
import Category from "@/views/Category";
import Cart from "@/views/Cart";
import Mime from "@/views/Mime";

export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    components: {
      default: Home,
      header: HomeHeader,
      footer: Footer
    },
    meta: {
      title: "首页",
      isTabBar: true,
      icon: "wap-home-o"
    }
  },
  {
    path: "/category",
    name: "category",
    components: {
      default: Category,
      header: HomeHeader,
      footer: Footer
    },
    meta: {
      title: "分类",
      isTabBar: true,
      icon: "qr"
    }
  },
  {
    path: "/cart",
    name: "cart",
    components: {
      default: Cart,
      footer: Footer
    },
    meta: {
      title: "购物车",
      isTabBar: true,
      icon: "shopping-cart-o"
    }
  },
  {
    path: "/mine",
    name: "mine",
    components: {
      default: Mime,
      footer: Footer
    },
    meta: {
      title: "我的",
      isTabBar: true,
      icon: "user-o"
    }
  }
];
