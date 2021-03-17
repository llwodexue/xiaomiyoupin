import axios from "./index";

// 首页大部分数据
const getHomepage = () => {
  return axios.post("/home/homepage/main/v1005?platform=m").then(res => {
    if (res.code == 0) {
      return res.data.homepage.floors;
    } else {
      return Promise.reject(res.message);
    }
  });
};

// 分类列表数据
const getHomeFeeds = (i = 0, id = "") => {
  return axios
    .post("/home/homepage/feeds", {
      feeds: {
        model: "Homepage2",
        action: "feeds"
      },
      index: i,
      query_id: id
    })
    .then(res => {
      if (res.code == 0) {
        return res.data.feeds;
      } else {
        return Promise.reject(res.message);
      }
    });
};

// 热点搜索数据
const getHotWords = id => {
  return axios.post("/home/mtop/market/search/hotWords").then(res => {
    if (res.code == 0) {
      return res;
    } else {
      return Promise.reject(res.message);
    }
  });
};

// 分类列表
const getCategoryList = () => {
  return axios.post("/home/mtop/market/cat/list", [{}, {}]).then(res => {
    if (res.code == 0) {
      return res.data;
    } else {
      return Promise.reject(res.message);
    }
  });
};

// 分类列表右侧
const getCategoryDetail = id => {
  return axios
    .post("/home/mtop/market/cat/detail", [{}, { catId: id }])
    .then(res => {
      if (res.code == 0) {
        return res.data;
      } else {
        return Promise.reject(res.message);
      }
    });
};

// 商品详情
const detail = id => {
  return axios
    .post("/home/api/gateway/detail", {
      channel: "",
      debug: false,
      groupName: "details",
      groupParams: [[id]],
      methods: [],
      version: "1.0.0"
    })
    .then(res => {
      if (res.code == 0) {
        return res.data;
      } else {
        return Promise.reject(res.message);
      }
    });
};

// 登录
const login = option => {
  return axios.post("/xiaomi/login", option).then(res => {
    if (res.code == 0) {
      return res;
    } else {
      return Promise.reject(res.message);
    }
  });
};

// 退出signout
const logout = () => {
  return axios.post("/xiaomi/logout").then(res => {
    if (res.code == 0) {
      return res;
    } else {
      return Promise.reject(res.message);
    }
  });
};

export default {
  getHomepage,
  getHomeFeeds,
  getHotWords,
  getCategoryList,
  detail,
  login,
  logout,
  getCategoryDetail
};
