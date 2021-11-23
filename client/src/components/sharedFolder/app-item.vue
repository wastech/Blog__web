<template>
  <div class="main">
    <div class="image">
      <img :src="item.image" alt="" />
    </div>
    <div class="text">
      <div class="title text-left text-dark q-mt-sm q-mb-none">
        <div class="text-h3 text-bold text-capitalize">
          {{ item.title }}
        </div>
      </div>

      <!-- icon section starts here -->
      <div class="blog__span text-left q-my-no-margin">
        <span
          ><q-icon name="fas fa-camera-retro" class="q-mr-md"></q-icon>
        </span>
        <span class="q-mr-md"
          >In <a href="">{{ item.category }}</a>
        </span>
        <span class="q-mr-md"
          >Tags <a href="">{{ item.tags }}</a>
        </span>
        <span class="q-mr-md">{{ item.createdAt }}</span>
        <span class="q-mr-md"><a href="">2 comments</a> </span>
        <span
          ><img :src="item.authorImage" alt="" class="avatar q-mr-md"
        /></span>
        <span class="q-mr-md text-capitalize"
          ><a href="">{{ item.name }}</a>
        </span>
      </div>
      <!-- icon section ends here -->

      <!-- paragraph starts here -->
      <div class="paragraph q-my-md text-justify">
        <div class="text-body1">
          {{ item.description }}
        </div>
      </div>

      <div class="button q-mb-xl">
        <q-btn
          outline
          rounded
          color="orange-6"
          text-color="primary"
          label="Continue Reading"
          no-caps
          class="q-mr-lg"
        />

        <!-- <q-btn
            class="q-ml-xs"
            icon="search"
            @click="show_filter = !show_filter"
            flat
          /> -->
        <!-- <q-input
            v-if="show_filter"
            filled
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          /> -->

        <q-btn
          no-shadow
          round
          @mouseover="show_filter = true"
          @mouseleave="show_filter = false"
          class="q-mr-xs"
          icon="fas fa-share"
        />
        <span v-if="show_filter">
          <q-icon name="fab fa-facebook-f" size="xs" class="q-mr-xs"></q-icon>
          <q-icon name="fab fa-twitter" size="xs" class="q-mr-xs"></q-icon>
          <q-icon
            name="fab fa-google-plus-g"
            size="xs"
            class="q-mr-xs"
          ></q-icon>
        </span>
      </div>
    </div>
    <q-separator />
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      show_filter: false,
    };
  },
};
</script>

<style scoped>
.image > img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: auto;
}
.text-h3 {
  font-size: 23px;
}
a {
  text-decoration: none;

  color: #222;
  border-bottom: 2px dotted #ccc;
  padding-bottom: 1px;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  object-fit: cover;
}
span {
  color: #666;
  font-size: 12px;
}
.text {
  max-width: 800px;
  margin: 0 auto;
}
.text-body1 {
  font-size: 14px;
  line-height: 26px;
}
.fas.fa-share {
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  visibility: visible;
  filter: alpha(opacity=100);
  opacity: 1;
}
.fa-facebook-f {
  border: 1px solid #234e9a;
  border-radius: 50%;
  padding: 7px;
  color: #234e9a;
  cursor: pointer;
  visibility: invisible;
}
.fa-facebook-f:hover {
  border: 1px solid #234e9a;
  border-radius: 50%;
  padding: 7px;
  color: #fff;
  background-color: #234e9a;
  cursor: pointer;
  visibility: invisible;
}
.fa-twitter {
  border: 1px solid #32aadc;
  border-radius: 50%;
  padding: 7px;
  color: #32aadc;
  cursor: pointer;
  visibility: invisible;
}
.fa-twitter:hover {
  border: 1px solid #32aadc;
  border-radius: 50%;
  padding: 7px;
  color: #fff;
  background-color: #32aadc;
  cursor: pointer;
  visibility: invisible;
}
.fab.fa-google-plus-g {
  border: 1px solid #e2131e;
  border-radius: 50%;
  padding: 7px;
  color: #e2131e;
  cursor: pointer;
  visibility: invisible;
}
.fab.fa-google-plus-g:hover {
  border: 1px solid #e2131e;
  border-radius: 50%;
  padding: 7px;
  color: #fff;
  background-color: #e2131e;
  cursor: pointer;
  visibility: invisible;
}
</style>
