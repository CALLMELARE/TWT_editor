import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Home",
      requireAuth: true,
    },
    component: ()=>import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About",
      requireAuth: false,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // 设置标签页title
  window.document.title =
    to.meta.title == undefined ? "TWT Editor" : `${to.meta.title} - TWT Editor`;
  // 访问权限设置
  // if (to.meta.requireAuth) {
  //   const token = false;
  //   // console.log(token);
  //   if (!token) {
  //     next({
  //       path: "/login",
  //       query: {
  //         from: to.fullPath,
  //       },
  //     });
  //   }
  // }
  next();
});

export default router;
