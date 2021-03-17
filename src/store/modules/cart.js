import * as TYPES from "../store-types";

/*
{
  price: xxx,
  img: xxx,
  title: xxx,
  gid: xxx,
  num: xxx,
  check: true/false
}
*/
const state = {
  shop: sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : []
};

const mutations = {
  [TYPES.ADD_CART]: (state, info) => {
    let isExist = state.shop.some(item => item.gid === info.gid);
    if (isExist) {
      state.shop = state.shop.map(item => {
        if (info.gid === item.gid) item.num++;
        return item;
      });
    } else {
      state.shop.push({
        ...info,
        num: 1,
        check: true
      });
    }
    sessionStorage.setItem("cart", JSON.stringify(state.shop));
  }
};

const getters = {
  totalNum(state) {
    return state.shop.reduce((acc, cur) => {
      return acc + cur.num;
    }, 0);
  },
  totalCheckNum(state) {
    return state.shop.reduce((acc, cur) => {
      return cur.check ? acc + cur.num : acc;
    }, 0);
  },
  isAllCheck() {
    return state.shop.every(item => item.check);
  },
  totalMoney(state) {
    return state.shop.reduce((acc, cur) => {
      return cur.check ? acc + cur.num * cur.price : acc;
    }, 0);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
