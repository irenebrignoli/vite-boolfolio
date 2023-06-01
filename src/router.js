import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import ProjectList from "./pages/ProjectList.vue";
import SingleProject from "./pages/SingleProject.vue";
import Contacts from "./pages/Contacts.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: TheHome,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectList,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
