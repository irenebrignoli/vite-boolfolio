import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import ProjectList from "./pages/ProjectList.vue";
import SingleProject from "./pages/SingleProject.vue";
import Contacts from "./pages/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      page: TheHome,
    },
    {
      path: "/contacts",
      name: "contacts",
      page: Contacts,
    },
    {
      path: "/projects",
      name: "projects",
      page: ProjectList,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      page: SingleProject,
    },
  ],
});

export { router };
