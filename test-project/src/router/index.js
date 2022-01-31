import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Price from "../views/Price.vue";
import Login from "../views/LoginUser.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/price",
    name: "Price",
    component: () =>
      import("../views/Price.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/LoginUser.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
