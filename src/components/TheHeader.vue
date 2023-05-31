<script>
import { store } from "../store";
export default {
  name: "TheHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- navbar-->
  <nav class="navbar bg-light navbar-expand-lg">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Boolfolio</span>

      <!-- btn toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- links -->
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li v-for="link in store.menuLinks" aria-current="page">
            <router-link :to="{ name: link.routeName }" class="nav-link">
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
