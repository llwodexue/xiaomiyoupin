import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import cart from "./modules/cart";
import logger from "vuex/dist/logger";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    user
  },
  plugins: [logger()]
});
