<script>
import { store } from "../store";
export default {
  name: "TheHome",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main class="ms_viewport-h">
    <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
      <div class="m-4 m-lg-5">
        <h1 class="display-5 fw-bold">A warm welcome!</h1>
        <p class="fs-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
          accusantium, aut iusto, dolor fugiat eaque perspiciatis earum nesciunt
          natus omnis, numquam suscipit rerum incidunt laboriosam minus neque
          voluptatem cum?
        </p>
        <router-link
          :to="{ name: store.menuLinks[1].routeName }"
          class="btn btn-primary"
        >
          Go to projects!
        </router-link>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
