import { createRouter, createWebHistory } from "vue-router";
import AddTaskView from "../views/AddTaskView.vue";
import EditTaskView from "../views/EditTaskView.vue";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";

// routing zadovoljen
const router = createRouter({
  // aplikacija je bookmarkable
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: HomeView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add-task",
      name: "add-task",
      component: AddTaskView,
    },
    {
      // dinamičko usmjeravanje s 404 stranicom
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
    {
      // statički 404
      path: "/404",
      name: "not-found-main",
      component: NotFoundView,
    },
    {
      path: "/edit-task/:id",
      name: "EditTask",
      component: EditTaskView,
      props: true,
    },
  ],
});

export default router;
