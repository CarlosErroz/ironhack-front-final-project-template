import { createRouter, createWebHistory } from "vue-router";
import Auth from "../pages/Auth.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Privacy from "../pages/Privacy.vue";
import Terms from "../pages/Terms.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
