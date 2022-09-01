import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/add-product",
      name: "add-product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/products/:id",
      name: "destination",
      component: () => import("../views/DestinationView.vue"),
    },
  ],
});

export default router;
