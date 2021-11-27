<template>
  <div class="app">
    <app-header />
    <router-view :key="$route.path" />
    <app-profile />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import appHeader from "./components/app-header.vue";
import AppProfile from "./components/app-profile.vue";

export default defineComponent({
  components: { appHeader, AppProfile },
  name: "App",
});
</script>
<style scoped>
.app {
  font-family: "Lora", serif;
  /* font-size: 16px;
  line-height: 1.5;
  color: #545454;
  background-color: #fff; */

  color: #222;
  font-size: 15px;
  line-height: 27px;
  overflow-x: hidden;
  word-break: break-word;
}
</style>
