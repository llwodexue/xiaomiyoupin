import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "https://m.xiaomiyoupin.com" : "",
  withCredentials: true,
  timeout: 8 * 1000,
});

// 在向服务器发送前，修改请求数据
/*axios.defaults.transformRequest = data => {
  if (!data) return data;
  let result = ``;
  for (let attr in data) {
    result += `&${attr}=${data[attr]}`;
  }
  return result.substring(1);
};*/

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    if (!config.headers["Content-Type"]) {
      // application/x-www-form-urlencoded;charset=UTF-8
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (reason) => {
    return Promise.reject(reason);
  }
);

service.defaults.validateStatus = (status) => {
  return /^(2|3)\d{2}$/.test(status);
};

export default service;
