import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err: any) => err)
}
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: '/home',
        component: () => import("../views/Home/Home.vue"),
      },
      {
        path: '/pics',
        component: () => import("../views/Pics/Pics.vue")
      },
      {
        path: '/note',
        component: () => import("../views/Note/Note.vue")
      },
      {
        path: '/download',
        component: () => import("../views/Download/Download.vue")
      },
      {
        path: '/talk',
        component: () => import("../views/Talk/Talk.vue")
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
