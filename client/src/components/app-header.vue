<template>
  <q-layout view="lHh Lpr lFf" style="min-height: 0px">
    <div class="main">
      <q-toolbar class="text-grey shadow-none rounded-borders" no-caps>
        <q-tabs v-model="tab" class="gt-sm" shrink>
          <q-btn flat label="Homepage" to="/" no-caps />

          <q-btn-dropdown stretch flat label="Posts" no-caps>
            <q-list>
              <q-item
                clickable
                v-ripple
                v-for="category in categories"
                :key="category"
              >
                <q-item-section>
                  <router-link
                    v-bind:to="{
                      name: 'category',
                      params: { id: category._id },
                    }"
                    class="a__boder"
                  >
                    {{ category.title }}
                  </router-link></q-item-section
                >
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn flat label="About Us" no-caps to="/about" />
          <q-btn flat label="Contact Us" no-caps to="/contact" />
        </q-tabs>
        <q-space></q-space>
        <form action="" @submit.prevent="checkName">
          <q-tabs v-model="tab" shrink no-caps class="text-dark gt-sm">
            <q-icon
              :name="icon.iconName"
              v-for="icon in icons"
              :key="icon"
              :to="icon.link"
              class="q-mr-lg"
            />

            <q-input
              v-if="show_filter"
              filled
              borderless
              dense
              debounce="300"
              v-model="keyword"
              placeholder="Search"
            />
            <q-btn
              class="q-ml-xs"
              icon="fas fa-search"
              @click="show_filter = !show_filter"
              flat
            />
          </q-tabs>
        </form>

        <q-btn-group rounded class="lt-md" style="width: 100%">
          <q-btn class="full-width" label="menu" @click="left = !left" />
          <q-btn icon="menu" class="full-width" @click="left = !left" />
        </q-btn-group>
      </q-toolbar>
    </div>
    <q-separator />
    <q-drawer v-model="left" side="left" bordered class="full-width">
      <q-scroll-area class="fit">
        <q-list bordered padding class="rounded-borders text-primary">
          <a href="/">
            <q-item clickable v-ripple>
              <q-item-section>Home</q-item-section>
            </q-item>
          </a>

          <q-expansion-item label="Posts">
            <q-list class="q-pl-lg">
              <q-item
                v-for="category in categories"
                :key="category"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section>
                  <router-link
                    v-bind:to="{
                      name: 'category',
                      params: { id: category._id },
                    }"
                    class="a__boder"
                  >
                    <q-item-label>{{ category.title }}</q-item-label>
                  </router-link>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <a href="/about">
            <q-item clickable v-ripple>
              <q-item-section>About Me</q-item-section>
            </q-item>
          </a>
          <a href="/contact">
            <q-item clickable v-ripple>
              <q-item-section>Contact Me</q-item-section>
            </q-item>
          </a>
        </q-list>
        <div class="text-center q-my-md">
          <q-icon
            :name="icon.iconName"
            v-for="icon in icons"
            :key="icon"
            :to="icon.link"
            class="q-mr-lg"
          />
        </div>
        <q-input
          rounded
          outlined
          v-model="text"
          dense
          placeholder="hit to search"
          type="search"
        >
          <template v-slot:append>
            <q-avatar>
              <q-icon name="search" />
            </q-avatar>
          </template>
        </q-input>
      </q-scroll-area>
    </q-drawer>
  </q-layout>
</template>

<script>
import categoriesService from "../services/categoriesService";
export default {
  data() {
    return {
      show_filter: false,
      left: false,
      keyword: "",
      tab: "",
      text: "",
      categories: [],
      icons: [
        { iconName: "fab fa-facebook-f" },
        { iconName: "fab fa-twitter", link: "https://twitter.com/wastech_a" },
        { iconName: "fab fa-google-plus-g" },
        { iconName: "fab fa-behance" },
        { iconName: "fab fa-dribbble" },
        { iconName: "fab fa-instagram" },
        { iconName: "fas fa-rss" },
      ],
    };
  },
  methods: {
    checkName() {
      if (!this.keyword) {
        console.log("please enter your keyword");
      } else {
        this.$router.push(`/searchpage/${this.keyword}`);
      }
    },
    async getPosts() {
      try {
        await categoriesService.cate().then((response) => {
          this.categories = response.data.data;
        });
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
.main {
  max-width: 1000px;
  margin: 0 auto;
}
.full-width {
  color: #666;
  /* border: 3px solid #f2f2f2; */
  padding: 9px 24px;
}
a {
  text-decoration: none !important;
  color: #000 !important;
}
</style>
