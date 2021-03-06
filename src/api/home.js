import axios from "./index";

const banner = () => {
  return axios.post("/home/homepage/main/v1005?platform=m").then(res => {
    if (res.code == 0) {
      return res.data.homepage.floors[1].data.items;
    } else {
      return Promise.reject(res.message);
    }
  });
};
export default {
  banner
};
