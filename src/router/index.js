import { createRouter, createWebHistory } from "vue-router";
import Auth from "../pages/Auth.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
