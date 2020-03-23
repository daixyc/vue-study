import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./store/index";
import "./registerServiceWorker";
import router from "./router";
import { create } from "./util/create";

Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.prototype.$create = create;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
