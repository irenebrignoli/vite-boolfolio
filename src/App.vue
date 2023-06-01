<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<template>
  <TheHeader></TheHeader>

  <main class="ms_viewport-h">
    <router-view></router-view>
  </main>

  <TheFooter></TheFooter>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
