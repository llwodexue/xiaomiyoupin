import { RegExp } from "core-js";
import Mock from "mockjs";
import user_img from "./assets/img/user.png";
import xiaomi_img from "./assets/img/xiaomi.jpg";

function success(option) {
  return {
    code: 0,
    codeText: "OK",
    ...option
  };
}

function fail() {
  return {
    code: 1,
    codeText: "NO",
    message: "error"
  };
}

const user = [
  {
    user: "user",
    pass: "32d25170b469b57095ca269b",
    token: "user-token",
    avatar: user_img
  },
  {
    user: "xiaomi",
    pass: "32d25170b469b57095ca269b",
    token: "xiaomi-token",
    avatar: xiaomi_img
  }
];

const login = options => {
  let query = JSON.parse(options.body);
  let res = user.filter(item => {
    return query.user == item.user && query.pass == item.pass;
  });
  if (res.length) {
    return success({
      user: res[0].user,
      token: res[0].token,
      avatar: res[0].avatar
    });
  }
  return fail();
};
Mock.mock(new RegExp("/xiaomi/login"), "post", login);

const logout = () => success();
Mock.mock(new RegExp("/xiaomi/logout"), "post", logout);
