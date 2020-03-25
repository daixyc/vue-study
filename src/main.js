import Vue from "vue";
import Vuex from "./kstore/kvuex";
import App from "./App.vue";
import store from "./kstore/index";
import "./registerServiceWorker";
import router from "./krouter";
import { create } from "./util/create";

Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.prototype.$create = create;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
