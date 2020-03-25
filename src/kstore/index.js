import Vue from "vue";
import Vuex from "./kvuex";

// 实现一个插件：$store挂载
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [{
        name: "鼠标",
        price: 20
      },
      {
        name: "键盘",
        price: 40
      },
      {
        name: "耳机",
        price: 60
      },
      {
        name: "显示屏",
        price: 80
      }
    ]
  },
  getters: {
    saleProducts: state => {
      let sp = state.products.map(product => {
        return {
          name: product.name,
          price: product.price / 2
        };
      });
      return sp;
    }
  },
  mutations: {
    minusPrice(state, priceLoad) {
      let newPrice = state.products.forEach(product => {
        product.price -= priceLoad;
      });
      return newPrice;
    }
  },
  actions: {
    //可以出现异步,用timeout模拟异步
    //提交的是mutations，而不是直接变更状态
    //第一个参数是context，是一个和store实例有相同属性和方法的对象
    minusPriceAsync(context, priceLoad) {
      setTimeout(() => {
        context.commit("minusPrice", priceLoad); //context提交
      }, 1000);
    }
  }
});