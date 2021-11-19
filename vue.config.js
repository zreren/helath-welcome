const path = require("path");

module.exports = {
  //加入以下
  publicPath: './',
	lintOnSave: false,
	outputDir: './build',
  configureWebpack: (config) => {
    config.resolve.alias = {
      "@": path.resolve(__dirname, "src"),
      views: "@/views",
      components: "@/components",
    };
    
  },
  
  devServer: {
    open: true,
    host: '192.168.72.39',
    port: 1024,
    https: false,
    proxy: {
      '/front': {
        target: 'http://localhost:82', //对应自己的接口
        ws: true,
        pathRewrite: {
          // "^/front": "/front"
        }
    //以上的ip和端口是我们本机的;下面为需要跨域的
}}}
};

