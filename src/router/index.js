import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
 import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: 'Login'
  },

  {
    path: "/Login",
    name: "Index",
    component: () =>
    // @ts-ignore
    import( "../views/Login/Index.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // @ts-ignore
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
