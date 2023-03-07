import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Board_PostList from "@/views/Board/PostList.vue";
import Board_Create from "@/views/Board/Create.vue";
// import Board_Update from "../views/Board_Update.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/board/postlist",
    name: "Board_PostList",
    component: Board_PostList,
  },
  {
    path: "/board/create",
    name: "Board_Create",
    component: Board_Create,
  },
  // {
  //   path: "/board_update",
  //   name: "board_update",
  //   component: Board_Update,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
