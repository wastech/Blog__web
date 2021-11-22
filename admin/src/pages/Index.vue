<template>
  <q-page>
    <CardSocial />
    <app-table />
  </q-page>
</template>

<script>
import AppTable from "../components/app-table.vue";
import CardSocial from "../components/cards/CardSocial";

export default {
  name: "PageIndex",
  components: { CardSocial, AppTable },
  data() {
    return {};
  },
};
</script>
