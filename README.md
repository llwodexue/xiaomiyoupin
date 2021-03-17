# 小米有品

## 页面

1. 首页
2. 分类页
3. 购物车
4. 我的
5. 搜索页
6. 商品详情页
7. 登录页
8. 退出登录页

## 账号

- 只是头像和用户名不一样（没有其他区别）

| 账号   | 密码 |
| ------ | ---- |
| user   | 123  |
| xiaomi | 123  |

## 功能

1. 轮播图
2. 商品添加（query 传参）
3. 添加购物车、收藏、显示购物车数量（vuex + sessionStorage）
4. 购物车选中商品、增加或减少商品数量、结算
5. 登录页（vuex + Cookie + localStorage）
6. 路由（meta 显示标题、是否是 tabBar、icon）[结合 keep-alive 使用，需注意只会走 created]、路由懒加载

## 问题

- 需要把 localhost 地址更改为 127.0.0.1，不然可能会出现状态码 500
- axios 添加修改数据会影响传参
- `window.addEventListener("scroll" ...);` 添加到 body 中，如果希望组件也能监控 scroll，需要开启捕获
- `Vue.filter("filterMoney", val => {return "￥${val / 100}";});` 全局处理 money
- van-sku，最好不要封装成组件，会报子改父的错误（show 的原因）
- `import user_img from "@/assets/img/user.png";` 
