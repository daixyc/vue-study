// 创建一个create函数，可以动态生成组件实例，并且挂载至body上
import Vue from "vue";
// Component:是组件配置对象  props是属性
export function create(Component, props) {
  //extend ==> 组件构造器
  const Ctor = Vue.extend(Component);
  // 创建组件实例 参数就是创建的组件的属性
  const comp = new Ctor({
    propsData: props
  });
  //挂载
  comp.$mount();
  //真实dom添加
  document.body.appendChild(comp.$el);
  // 销毁  不然会造成内存泄漏
  comp.remove = () => {
    document.body.removeChild(comp.$el);
    comp.$destroy();
  };

  //   // Vue构造函数来动态生成这个组件实例 ==> vm
  //   const vm = new Vue({
  //     render(h) {
  //       // h是createElement别名，它返回一个虚拟dom，VNode
  //       return h(Component, {props})
  //     }
  //   })

  //   // 通过挂载得到真实dom,挂载时不能指定宿主元素
  //   //$mount("body") ==> 会直接覆盖body
  //   vm.$mount()

  //   // 通过$el属性获取真实dom
  //   document.body.appendChild(vm.$el)

  //   // 组件实例返回，只有唯一的孩子
  //   const comp = vm.$children[0]

  //   // 销毁  不然会造成内存泄漏
  //   comp.remove = () => {
  //     document.body.removeChild(vm.$el)
  //     comp.$destroy()
  //   }

  return comp;
}
