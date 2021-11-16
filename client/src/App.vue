<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style scoped>
.app {
  font-family: "Lora", serif;
  font-size: 16px;
  line-height: 1.5;
  color: #545454;
  background-color: #fff;
}
</style>
