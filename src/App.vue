<script>
import TheHeader from "./components/TheHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  components: {
    TheHeader,
    ProjectList,
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <ProjectList></ProjectList>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
