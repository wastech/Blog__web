<template>
  <div class="main">
    <app-header />
    <app-item />
  </div>
</template>

<script>
import appHeader from "../components/app-header.vue";
import AppItem from "../components/app-item.vue";

export default {
  components: { appHeader, AppItem },
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
