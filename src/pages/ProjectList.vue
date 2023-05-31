<script>
import axios from "axios";
import TheProject from "../components/TheProject.vue";
import { store } from "../store";

export default {
  name: "ProjectList",
  components: TheProject,
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: null,
      store,
    };
  },
  methods: {
    getApiProjects(gotoPage) {
      //console.log("Hello");
      axios
        .get(`${this.store.baseUrl}/api/projects`, {
          params: {
            page: gotoPage,
          },
        })
        .then((response) => {
          //console.log(response);
          this.projects = response.data.results.data;
          this.currentPage = response.data.results.current_page;
          this.lastPage = response.data.results.last_page;
        });
    },
  },
  mounted() {
    this.getApiProjects();
  },
  components: { TheProject },
};
</script>

<template>
  <main class="my-5">
    <div class="container">
      <h1 class="text-center my-5">Projects</h1>
      <div class="row justify-content-center g-5">
        <!-- importo le card con v-for -->
        <div v-for="project in projects" class="col-3">
          <TheProject :project="project"></TheProject>
        </div>
        <!-- fine ciclo -->
      </div>

      <!-- pagination -->
      <nav aria-label="Page navigation example">
        <ul class="pagination d-flex justify-content-center mt-5">
          <li class="page-item">
            <button
              class="page-link"
              @click="getApiProjects(currentPage - 1)"
              :class="{ disabled: currentPage == 1 }"
            >
              Previous
            </button>
          </li>
          <li class="page-item">
            <button
              class="page-link"
              @click="getApiProjects(currentPage + 1)"
              :class="{ disabled: currentPage == lastPage }"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.my_card {
  max-height: 500px;
}
</style>
