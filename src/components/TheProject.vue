<script>
import { store } from "../store";

export default {
  name: "TheProject",
  props: ["project"],
  data() {
    return {
      contentLength: 200,
      store,
    };
  },
  methods: {
    shorterText(text, description) {
      if (text && text.length > this.contentLength) {
        return text.substr(0, this.contentLength) + "...";
      } else {
        return description;
      }
    },
  },
};
</script>

<template>
  <div class="card">
    <img
      v-if="project.image"
      :src="`${this.store.baseUrl}/storage/${project.image}`"
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
      <li class="list-group-item">
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
      <li class="list-group-item">
        <router-link
          :to="{ name: 'single-project', params: { slug: project.slug } }"
          class="btn btn-outline-primary"
        >
          Show project
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
