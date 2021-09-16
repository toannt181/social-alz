import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Influencer from "../views/Influencer";
import Hashtag from "../views/Hashtag";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Home
  },
  {
    path: "/influencer",
    name: "Influencer",
    component: Influencer
  },
  {
    path: "/hashtag/:id",
    name: "Hashtag",
    component: Hashtag
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
