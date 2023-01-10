import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue";
import QuizView from "../views/QuizView.vue";

const routes = [
  {
    path: "/",
    name: "quizes",
    component: QuizesView,
  },
  {
    path: "/quiz/:id",
    name: "quiz",
    component: QuizView,
  },
  
  //   {
  //     path: "/about",
  //     name: "about",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //   },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // routes : [
  //   {
  //     path: "/",
  //     name: "quizes",
  //     component: QuizesView,
  //   }
  // ]
});

export default router;
