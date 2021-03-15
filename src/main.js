import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/vantui";
import axios from "@/api/api";
import "./mock";
import "vant/lib/index.css";
import "./assets/reset.css";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.filter("filterMoney", val => {
  return `￥${val / 100}`;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

