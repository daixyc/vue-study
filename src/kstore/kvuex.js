// 1.实现一个插件：实现Store，挂载$store
// 引用Vue构造函数
let Vue;

class Store {
  constructor(options) {
    //实现getters
    this._getters = options.getters;

    //下边这一部分操作只能在new Vue之前进行，因为要将这部分的结果，放在Vue中的计算属性
    // 定义一个computed属性
    const computed = {};
    this.getters = {};
    const store = this;
    Object.keys(this._getters).forEach(key => {
      //获取 index中设置的getters 当前key对应的操作
      const fn = store._getters[key];
      //向computed中填充 计算属性的操作
      computed[key] = function() {
        return fn(store.state);
      };

      //为getters定义只读属性  Object.defineProperty 方法再学习一下！
      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key]
      });
    });

    // 只要放到data上，即成为响应式的数据
    // vm.data.count  vm.count
    this._vm = new Vue({
      data: {
        $$state: options.state
      },
      computed //一个无参计算属性，其实就是上边定义的那个 computed
    });

    // 保存 mutaions
    this._mutations = options.mutations;

    this._actions = options.actions;

    // 绑定commit、dispatch方法中的this到Store实例上
    // const store = this;
    const {
      commit,
      dispatch
    } = store;
    this.commit = function boundCommit(type, payload) {
      commit.call(store, type, payload);
    };
    this.dispatch = function boundDispatch(type, payload) {
      dispatch.call(store, type, payload);
    };
  }

  // 只读state，可以获取数据
  get state() {
    return this._vm._data.$$state;
  }

  set state(v) {
    // eslint-disable-next-line no-console
    console.error("表改，这里不能修改state，想改请使用replaceState()");
  }

  // //updated:type-getters类型？payload-参数？好像不需要这俩参数
  // updated(state) {
  //   const entry = this._getters[state];
  //   if (!entry) {
  //     return;
  //   }
  //   entry(this.state);
  //   // eslint-disable-next-line no-console
  //   console.log(entry(this.state));
  // }
  // commit: type-mutation类型，payload-参数
  commit(type, payload) {
    const entry = this._mutations[type];
    if (!entry) {
      // eslint-disable-next-line no-console
      console.error("unknown mutation type:" + type);
      return;
    }
    // 在这可以做一些拦截处理

    // 传递state进去
    entry(this.state, payload);
  }

  // action: type-action类型，payload-参数
  dispatch(type, payload) {
    const entry = this._actions[type];
    if (!entry) {
      // eslint-disable-next-line no-console
      console.error("unknown mutation type:" + type);
      return;
    }
    // 在这可以做一些拦截处理

    // 传递上下文进去，实际上就是Store实例
    entry(this, payload);
  }
}

function install(_Vue) {
  Vue = _Vue;

  // 全局混入
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}

// 下面导出的对象等同于Vuex，实例化时使用new Vuex.Store
export default {
  Store,
  install
};