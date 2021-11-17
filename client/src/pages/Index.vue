<template>
  <div class="main">
    <app-header />
    <app-item />
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        color="deep-orange"
        :max="5"
        boundary-links
      />
    </div>
    <app-profile />
  </div>
</template>

<script>
import appHeader from "../components/app-header.vue";
import AppItem from "../components/app-item.vue";
import AppProfile from "../components/app-profile.vue";

export default {
  components: { appHeader, AppItem, AppProfile },
  name: "PageIndex",
  data() {
    return {
      current: 3,
    };
  },
};
</script>

<style scoped>
.main {
  max-width: 970px;
  margin: 0 auto;
}
</style>
