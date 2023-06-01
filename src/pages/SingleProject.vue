<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "SingleProject",
  data() {
    return {
      store,
      project: null,
    };
  },
  mounted() {
    const slug = this.$route.params.slug;

    axios.get(`${this.store.baseUrl}/api/project/${slug}`).then((response) => {
      if (response.data.success == true) {
        this.project = response.data.project;
      } else {
        //alert(response.data.error);
        this.$router.push({ name: "not-found" });
      }
    });
  },
};
</script>

<template>
  <div v-if="project">
    <div class="card ms_card border-light text-center my-5">
      <img
        v-if="project.image"
        :src="`${this.store.baseUrl}/storage/${project.image}`"
        :alt="project.title"
        class="ms_image_lg"
      />
      <img
        v-else
        src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
        :alt="project.title"
        class="ms_image_lg"
      />
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">
          {{ project.description }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: {{ project.id }}</li>

        <!-- v-if per type -->
        <li v-if="project.type" class="list-group-item">
          Type: {{ project.type.name }}
        </li>
        <li v-else class="list-group-item">Type: No type selected</li>

        <!-- v-if e v-for per techonologies -->
        <li class="list-group-item">
          <div class="mb-2">Technologies:</div>
          <span
            v-for="technology in project.technologies"
            class="badge rounded-pill text-bg-success me-2"
          >
            {{ technology.name }}
            <span v-if="technology.length == 0"
              >No techonologies selected</span
            ></span
          >
        </li>
        <li class="list-group-item mt-3">
          <router-link
            :to="{ name: store.menuLinks[1].routeName }"
            class="btn btn-primary"
          >
            Come back to projects
          </router-link>
        </li>
      </ul>
    </div>
  </div>

  <div v-else>immagine caricamento</div>
</template>

<style lang="scss" scoped>
.ms_card {
  max-width: 700px;
  margin: auto;
  .ms_image_lg {
    max-width: 300px;
    max-height: 300px;
    object-fit: contain;
    margin: auto;
  }
}
</style>
