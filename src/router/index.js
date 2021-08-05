import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Influencer from "../views/Influencer";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/influencer",
    name: "Influencer",
    component: Influencer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
