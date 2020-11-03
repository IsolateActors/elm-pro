import Axios from "axios";
import config from "@/config";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseUrl.dev
    : config.baseUrl.pro;
console.log(process.env.NODE_ENV);

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      header: {
        //请求头
      }
    };
    return config;
  }

  //拦截器
  interceptors(instance) {
    instance.interceptors.request.use(
      config => {
        //处理config
        console.log("拦截和处理");
        config.data = {
          msg: "hello world"
        };
        console.log(config);
        return config;
      },
      error => {
        // 请求出问题，处理问题
        console.log(error);
        return {
          error: "网络出问题了"
        };
      }
    );
    instance.interceptors.response.use(
      res => {
        //处理响应
        console.log("处理响应");
        console.log(res);
        return res.data;
      },
      error => {
        // 请求出问题，处理问题
        console.log(error);
        return {
          error: "网络出问题了"
        };
      }
    );
  }

  // 请求
  request(options) {
    // 创建对象
    const instance = Axios.create();
    // 将所有可枚举属性的值从一个或多个源对象分配到目标对象
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
}

const axiosObj = new HttpRequest(baseUrl);

export default axiosObj;
