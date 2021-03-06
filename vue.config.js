module.exports = {
  lintOnSave: false,
  productionSourceMap: false, //生产环境是否生成 sourceMap 文件
  devServer: {
    port: 9999,
    open: true,
    hotOnly: true,
    proxy: {
      // 拦截以 /api 开头的请求并替换为 target
      "/home": {
        target: "https://m.xiaomiyoupin.com", //代理地址
        changeOrigin: true, // 接口跨域
        pathRewrite: {
          "^/home": "",
        },
      },
      "/server": {
        target: "http://127.0.0.1:7777",
        changeOrigin: true,
        pathRewrite: {
          "^/server": "",
        },
      },
    },
  },
};
