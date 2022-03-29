const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProduction ? `./` : '/',
  assetsDir: './static',
  lintOnSave: false, // 关闭eslint检查
  productionSourceMap: false, //生产环境是否生成 sourceMap 文件
  devServer: {
    port: 9999,
    open: true, // 浏览器自动打开
    hotOnly: false, // 热更新
    compress: true, // 启动gzip压缩
    hot: true, // 开启HMR
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
