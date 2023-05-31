<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
