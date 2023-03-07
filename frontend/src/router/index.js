import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Board from "../views/Board.vue";
// import Board_Create from "../views/Board-Create.vue";
// import Board_Update from "../views/Board_Update.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/board/:page?",
    name: "board",
    component: Board,
    // props: true,
    // props: (route) => ({ page: route.params.page || "1" }),
  },
  // {
  //   path: "/board_create",
  //   name: "board_create",
  //   component: Board_Create,
  // },
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
