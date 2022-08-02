import axios from "axios";
// npm install qs 需要用到qs.stringify()方法将post请求格式改为 xxx=123&id=666
import qs from "qs";

/**
 * 根据环境变量区分接口默认地址
 * package.json scripts
 *  "serve:test": "set NODE_ENV=test&&vue-cli-service serve",
 *  "serve:production": "set NODE_ENV=production&&=vue-cli-service serve",
*/
switch (process.env.NODE_ENV) {
    case "development":
        axios.defaults.baseURL = "http://localhost:8080";
        break;
    case "production":
        axios.defaults.baseURL = "";
        break;
    case "test":
        axios.defaults.baseURL = "";
        break;
}
/**
 * 设置超时时间和跨域是否允许携带凭证
*/
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
/**
 * 设置post请求传递数据的格式(看服务器要求什么格式)
 *x-www-form-urlencoded  (xxx=xxx&xx=x) 
 */
axios.defaults.headers["content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.transformRequest = data => qs.stringify(data);
/**
 * 设置请求拦截器
 * 客户端发送请求 -> [请求拦截器] -> 服务器
 * TOKEN校验（JMT）接收服务器返回的token，存储到vuex/本地存储中，
 * 每一次想服务器发送请求，我们应该把token带上
 * */
axios.interceptors.request.use(config => {
    // 携带token
    let token = localStorage.getItem("token");
    // 把特殊请求头带上
    token && (config.headers.Authorization = token);
    return config;
}, error => {
    return Promise.reject(error);
});
/**
 * 响应拦截器
 * 服务器返回信息 ->  [拦截的统一处理] -> 客户单JS获取到信息
*/
// axios.defaults.validateStatus = status => /^(2|3)\d{2}$/.test(status);
axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    let { response } = error;
    if (response) {
        //服务器最起码返回结果了
        switch (response.status) {
            case 401://当前请求需要用户验证（未登录）--权限
                // 模态框提示操作或者跳转路由
                break;
            case 403://token过期了  --服务器拒绝执行
                break;
            case 404://找不到页面
                break;
        }
    } else {
        //服务器连结果都没有返回
        if (!window.navigator.onLine) {
            //断网处理：可以跳转到断网页面
            return;
        }
        return Promise.reject(error);
    }
});
export default axios;

