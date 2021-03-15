import axios from "./index";

const getHomepage = () => {
  return axios.post("/home/homepage/main/v1005?platform=m").then(res => {
    if (res.code == 0) {
      return res.data.homepage.floors;
    } else {
      return Promise.reject(res.message);
    }
  });
};

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

const getHotWords = id => {
  return axios.post("/home/mtop/market/search/hotWords").then(res => {
    if (res.code == 0) {
      return res;
    } else {
      return Promise.reject(res.message);
    }
  });
};

const getCategoryList = () => {
  return axios.post("/home/mtop/market/cat/list", [{}, {}]).then(res => {
    if (res.code == 0) {
      return res.data;
    } else {
      return Promise.reject(res.message);
    }
  });
};

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

const login = option => {
  return axios.post("/xiaomi/login", option).then(res => {
    if (res.code == 0) {
      return res;
    } else {
      return Promise.reject(res.message);
    }
  });
};
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
  login,
  logout,
  getCategoryDetail
};
