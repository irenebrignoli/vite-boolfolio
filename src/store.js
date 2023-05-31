import { reactive } from "vue";

export const store = reactive({
  baseUrl: "http://localhost:8000",
  menuLinks: [
    {
      label: "Home",
      routeName: "home",
    },
    {
      label: "Projects",
      routeName: "projects",
    },
    {
      label: "Contacts",
      routeName: "contacts",
    },
  ],
});
