import Footer from "@/views/Footer";
import HomeHeader from "@/components/HomeHeader";
import Home from "@/views/Home";

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
      // icon: "wap-home-o",
      icon: "wap-home"
    }
  },
  {
    path: "/popup",
    name: "popup",
    component: () => import("@/views/Popup"),
    meta: {
      title: "弹出层",
      isTabBar: false
    }
  },
  {
    path: "/category",
    name: "category",
    components: {
      default: () => import("@/views/Category"),
      header: () => import("@/components/CategoryHeader"),
      footer: Footer
    },
    meta: {
      title: "分类",
      isTabBar: true,
      // icon: "label-o",
      icon: "label"
    }
  },
  {
    path: "/cart",
    name: "cart",
    components: {
      default: () => import("@/views/Cart"),
      header: () => import("@/components/CartHeader"),
      footer: Footer
    },
    meta: {
      title: "购物车",
      isTabBar: true,
      // icon: "shopping-cart-o",
      icon: "shopping-cart"
    }
  },
  {
    path: "/mine",
    name: "mine",
    components: {
      default: () => import("@/views/Mime"),
      footer: Footer
    },
    meta: {
      title: "我的",
      isTabBar: true,
      // icon: "user-o",
      icon: "manager"
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/Login"),
    meta: {
      title: "登录",
      isTabBar: false
    }
  }
];
