<template>
  <div class="">
    <q-toolbar class="text-grey shadow-none rounded-borders" no-caps>
      <q-btn flat label="Homepage" no-caps />
      <!-- <q-btn flat label="Posts" no-caps /> -->
      <q-btn-dropdown stretch flat label="Posts" no-caps>
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section>Image Post</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Video Post</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Audio Post</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn flat label="About Us" no-caps />
      <q-btn flat label="Contact Us" no-caps />
      <q-btn flat label="Purchase!" no-caps />
      <q-space />
      <q-tabs v-model="tab" shrink no-caps class="text-dark">
        <q-icon
          :name="icon.iconName"
          v-for="icon in icons"
          :key="icon"
          class="q-mr-lg"
        />
      </q-tabs>
      <q-input
        v-if="show_filter"
        filled
        borderless
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      />
      <!-- <template v-slot:append>
          <q-icon name="search" />
        </template> -->
      <!-- </q-input> -->

      <q-btn
        class="q-ml-xs"
        icon="search"
        @click="show_filter = !show_filter"
        flat
      />
    </q-toolbar>
    <q-separator />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show_filter: false,
      icons: [
        { iconName: "fab fa-facebook-f" },
        { iconName: "fab fa-twitter" },
        { iconName: "fab fa-google-plus-g" },
        { iconName: "fab fa-behance" },
        { iconName: "fab fa-dribbble" },
        { iconName: "fab fa-instagram" },
        { iconName: "fas fa-rss" },
      ],
    };
  },
};
</script>

<style scoped>
.q-toolbar {
  max-width: 70%;
  margin: 0 auto;
}
</style>
