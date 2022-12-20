import { createRouter, createWebHistory } from "vue-router";

import PathNotFound from "@/views/404.vue";
import Home from "@/views/Index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  { path: "/:pathMatch(.*)*", component: PathNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
