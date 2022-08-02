import qs from "qs";
import { del } from "vue";
/**
 * 根据环境变量区分接口默认地址
 * package.json scripts
 *  "serve:test": "set NODE_ENV=test&&vue-cli-service serve",
 *  "serve:production": "set NODE_ENV=production&&=vue-cli-service serve",
*/
let baseURL = "";
let baseURLArr = [
    {
        type: "development",
        url: "",
    },
    {
        type: "test",
        url: "",
    },
    {
        type: "production",
        url: "",
    }
]
baseURLArr.forEach(item => {
    if (process.env.NODE_ENV === item.type) {
        baseURL = item.url;
    }
})
export default function request (url, options = {}) {
    url = baseURL + url;
    /**
     * GET请求处理
    */
    !options.method ? options.method = "GET" : null;
    if (options.hasOwnProperty("params")) {
        if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.method)) {
            const ask = url.includes("?") ? "&" : "?";
            url += `${ask}${qs.stringify(params)}`;
        }
        delete options.params;
    }
    /**
     * 合并配置项
    */
    options = Object.assign({
        //允许跨域携带资源凭证same-origin同源可以 omit都拒绝
        credentials: "include",
        // 设置请求头
        headers: {}
    }, options);
    options.headers.Accept = "application/json";

    /**
     * token的校验
     * */
    const token = localStorage.getItem("token");
    token && (options.headers.Authorization = token);
    /**
     * POST请求处理
    */
    if (/^(POST|PUT)$/i.test(options.method)) {
        !options.type ? options.type = "urlencoded" : null;
        if (options.type === "urlencoded") {
            options.headers["Content-type"] = "application/x-www-form-urlencoded";
            options.body = qs.stringify(options.body);
        }
        if (options.type === "json") {
            options.headers["Content-Type"] = "application/json";
            options.body = JSON.stringify(options.body);
        }
    }

    return fetch(url, options).then(response => {
        if (!/^(2|3)\d{2}$/.test(response.status)) {
            switch (response.status) {
                case 401://当前请求需要用户验证（未登录）--权限
                    // 模态框提示操作或者跳转路由
                    break;
                case 403://token过期了  --服务器拒绝执行
                    localStorage.removeItem("token");
                    break;
                case 404://找不到页面
                    break;
            }
        }
        return response.json();
    }).catch(error => {
        //服务器连结果都没有返回
        if (!window.navigator.onLine) {
            //断网处理：可以跳转到断网页面
            return;
        }
        return Promise.reject(error);
    })
}