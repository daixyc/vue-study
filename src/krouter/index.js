import Vue from "vue";
import VueRouter from "./kvue-router";
import Home from "../views/Home.vue";

// 1.实现一个插件
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    children: [{
      path: "a",
      name: "children_a",
      component: () => import("../views/Children_a.vue")
    },{
      path: "b",
      name: "children_b",
      component: () => import("../views/About.vue")
    }]
  },
  {
    path: "/tree",
    name: "tree",
    component: () => import("../views/MyTree.vue")
  }
];

// 实现一个VueRouter类
const router = new VueRouter({
  routes
});

export default router;