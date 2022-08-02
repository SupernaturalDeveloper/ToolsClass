/**
 * 定义数据请求的唯一入口
*/

/* 在vue.config.js中配置本地代理 解决跨域问题
// 配置服务器，添加代理选项
  // devServer:开发 服务器
  devServer: {
    // 必须重启服务器，配置才能生效
    // proxy:代理
    proxy: {
      '/xx': {
        // target：由服务器帮助到此域名中请求数据--代理
        target: 'http://jxsjs.com',
        changeOrigin: true, //代表 域名不同，需要提供代理模式
        // 路径重写：真正发送的请求地址中，要去掉 /xx 开头
        pathRewrite: {
          // ^:正则中得字符串开头
          '^/xx': '',
          // 如果不替换则发送的请求地址为：会多一个 /xx
          // http://m.douyu.com/douyu/api/room/list?page=1
        },
      },
    },
  },
*/

export default {

}