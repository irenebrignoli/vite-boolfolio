<script>
import axios from "axios";

export default {
  name: "TheMain",
  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000",
      contentLength: 200,
      currentPage: 1,
      lastPage: null,
    };
  },
  methods: {
    getApiProjects(gotoPage) {
      //console.log("Hello");

      axios
        .get(`${this.baseUrl}/api/projects`, {
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
    shorterText(text, description) {
      if (text && text.length > this.contentLength) {
        return text.substr(0, this.contentLength) + "...";
      } else {
        return description;
      }
    },
  },
  mounted() {
    this.getApiProjects();
  },
};
</script>

<template>
  <main class="my-5">
    <div class="container">
      <h1 class="text-center my-5">Projects</h1>
      <div class="row justify-content-center g-5">
        <!-- importo le card con v-for -->
        <div v-for="project in projects" class="col-3">
          <div class="card">
            <img
              v-if="project.image"
              :src="`${this.baseUrl}/storage/${project.image}`"
              class="card-img-top"
              :alt="project.title"
            />
            <img
              v-else
              src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
              class="card-img-top"
              :alt="project.title"
            />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">
                {{ shorterText(project.description, project.description) }}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <!-- v-if per type -->
              <li v-if="project.type" class="list-group-item">
                {{ project.type.name }}
              </li>
              <li v-else class="list-group-item">No type selected</li>
              <!-- v-if e v-for per techonologies -->
              <li
                v-if="project.technologies.name != ''"
                class="list-group-item"
              >
                <span
                  v-for="technology in project.technologies"
                  class="badge rounded-pill text-bg-success me-2"
                  >{{ technology.name }}</span
                >
              </li>
              <li v-else class="list-group-item">
                <span>No technologies selected</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- fine ciclo -->
      </div>

      <!-- pagination -->
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link" href="#">Previous</button>
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
