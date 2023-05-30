<script>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMAin.vue";

export default {
  components: {
    TheHeader,
    TheMain,
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <TheMain></TheMain>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
