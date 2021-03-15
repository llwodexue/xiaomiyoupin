import axios from "axios";

// axios.defaults.baseURL = 'http://127.0.0.1:7777';
axios.defaults.withCredentials = true;
// axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.timeout = 6000;

/*
// 在向服务器发送前，修改请求数据
axios.defaults.transformRequest = data => {
  if (!data) return data;
  let result = ``;
  for (let attr in data) {
    result += `&${attr}=${data[attr]}`;
  }
  return result.substring(1);
};

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
*/
// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  reason => {
    return Promise.reject(reason);
  }
);
axios.defaults.validateStatus = status => {
  return /^(2|3)\d{2}$/.test(status);
};

export default axios;
