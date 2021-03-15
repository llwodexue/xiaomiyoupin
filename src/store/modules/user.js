import Cookies from "js-cookie";
import * as TYPES from "../store-types";
import API from "../../api/api";

const defaultState = {
  token: Cookies.get("admin_token"),
  name: "",
  avatar: ""
};

const state = defaultState;
const mutations = {
  [TYPES.SET_TOKEN]: (state, token) => {
    state.token = token;
  },
  [TYPES.SET_NAME]: (state, name) => {
    state.name = name;
  },
  [TYPES.SET_AVATAR]: (state, avatar) => {
    state.avatar = avatar;
  },
  [TYPES.RESET_STATE]: state => {
    Object.assign(state, defaultState);
  }
};

const actions = {
  login({ commit }, info) {
    return new Promise((resolve, reject) => {
      let { user, pass } = info;
      API.login({ user: user.trim(), pass: pass }).then(res => {
        commit(TYPES.SET_TOKEN, res.token);
        commit(TYPES.SET_NAME, res.name);
        commit(TYPES.SET_AVATAR, res.avatar);
      });
    });
  },
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      API.logout().then(res => {
        commit(TYPES.RESET_STATE, state);
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
