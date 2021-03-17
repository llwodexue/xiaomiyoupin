import Cookies from "js-cookie";
import * as TYPES from "../store-types";
import API from "@/api/api";

const defaultState = {
  token: "",
  name: "",
  avatar: ""
};
const state = {
  token: Cookies.get("token"),
  name: sessionStorage.getItem("name"),
  avatar: sessionStorage.getItem("avatar")
};

const mutations = {
  [TYPES.SET_TOKEN]: (state, token) => {
    state.token = token;
    Cookies.set("token", token);
  },
  [TYPES.SET_NAME]: (state, name) => {
    state.name = name;
    sessionStorage.setItem("name", name);
  },
  [TYPES.SET_AVATAR]: (state, avatar) => {
    state.avatar = avatar;
    sessionStorage.setItem("avatar", avatar);
  },
  [TYPES.RESET_STATE]: state => {
    Object.assign(state, defaultState);
    Cookies.remove("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("avatar");
  }
};

const actions = {
  login({ commit }, info) {
    return API.login(info).then(res => {
      commit(TYPES.SET_TOKEN, res.token);
      commit(TYPES.SET_NAME, res.name);
      commit(TYPES.SET_AVATAR, res.avatar);
    });
  },

  logout({ commit }) {
    return API.logout().then(res => {
      commit(TYPES.RESET_STATE);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
