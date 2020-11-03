import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/config/rem";

Vue.config.productionTip = false;
if (process.env.NODE_ENV == "development") {
  require("@/api/mock");
}

// // 全部导入（不推荐）
// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
