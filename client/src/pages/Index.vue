<template>
  <div class="main">
    <app-header />
  </div>
</template>

<script>
import appHeader from "../components/app-header.vue";

export default {
  components: { appHeader },
  name: "PageIndex",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main {
  max-width: 970px;
  margin: 0 auto;
}
</style>
