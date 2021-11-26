<template>
  <q-layout view="lHh Lpr lFf" style="min-height: 0px">
    <div class="main">
      <q-toolbar class="text-grey shadow-none rounded-borders" no-caps>
        <q-tabs v-model="tab" class="gt-sm" shrink>
          <q-btn flat label="Homepage" no-caps />

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
        </q-tabs>
        <q-space></q-space>
        <q-tabs v-model="tab" shrink no-caps class="text-dark gt-sm">
          <q-icon
            :name="icon.iconName"
            v-for="icon in icons"
            :key="icon"
            class="q-mr-lg"
          />

          <q-input
            v-if="show_filter"
            filled
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          />
          <q-btn
            class="q-ml-xs"
            icon="search"
            @click="show_filter = !show_filter"
            flat
          />
        </q-tabs>

        <q-btn-group rounded class="lt-md" style="width: 100%">
          <q-btn class="full-width" label="menu" @click="left = !left" />
          <q-btn icon="menu" class="full-width" @click="left = !left" />
        </q-btn-group>

        <!-- <q-btn
          align="between"

          class="btn-full-width lt-md"
          color="brown-5"
          icon="menu"
          label="menu"
        /> -->
        <!-- <q-btn
          dense
          flat
          round
          icon="menu"
          @click="left = !left"

        /> -->
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
              <q-item to="/-" active-class="q-item-no-link-highlighting">
                <q-item-section>
                  <q-item-label>Image Post</q-item-label>
                </q-item-section>
              </q-item>
              <q-item to="/" active-class="q-item-no-link-highlighting">
                <q-item-section>
                  <q-item-label>video Post</q-item-label>
                </q-item-section>
              </q-item>
              <q-item to="/" active-class="q-item-no-link-highlighting">
                <q-item-section>
                  <q-item-label>Audio Post</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <a href="/">
            <q-item clickable v-ripple>
              <q-item-section>About Me</q-item-section>
            </q-item>
          </a>
          <a href="">
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
            class="q-mr-lg"
          />
        </div>
      <q-input rounded outlined v-model="text" dense placeholder="hit to search" type="search">
        <template v-slot:append>
          <q-avatar>
          <q-icon name="search"/>
          </q-avatar>
        </template>
      </q-input>

      </q-scroll-area>
    </q-drawer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      show_filter: false,
      left: false,
      tab: "",
      text: "",
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
  text-decoration: none;
  color: #1d1d1d;
}
</style>
