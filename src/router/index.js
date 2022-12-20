import { createRouter, createWebHistory } from "vue-router";
import Auth from "../pages/Auth.vue";

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
