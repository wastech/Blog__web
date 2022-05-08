<template>
  <div class="main">
    <div class="image" v-if="item.imageUrl">
      <img
        :src="item.imageUrl"
        alt=""
        class="shadow-3"
        v-bind:style="$q.screen.lt.md ? { height: '20vh' } : { height: '40vh' }"
      />
    </div>
    <div class="text">
      <div class="title text-left text-dark q-mt-sm q-mb-none">
        <router-link
          v-if="typeof item.id !== 'undefined'"
          v-bind:to="{
            name: 'single',
            params: { id: item._id },
          }"
          class="a__boder"
        >
          <div class="text-h3 text-bold text-capitalize">
            {{ item.title }}
          </div>
        </router-link>
      </div>

      <!-- icon section starts here -->
      <div class="blog__span text-left q-my-no-margin">
        <span
          ><q-icon name="fas fa-camera-retro" class="q-mr-md"></q-icon>
        </span>

        <router-link
          v-if="item.categoryId"
          v-bind:to="{
            name: 'category',
            params: { id: item.categoryId._id },
          }"
          class="a__boder"
        >
          <span class="q-mr-md">In {{ item.categoryId.title }} </span>
        </router-link>
        <span class="q-mr-md" v-for="tag in item.tags" :key="tag"
          >Tags
          <router-link
            v-bind:to="{
              name: 'tags',
              params: { id: tag },
            }"
            class="a__boder"
          >
            {{ tag }}
          </router-link>
        </span>
        <span class="q-mr-md">{{ moment(item.createdAt).fromNow() }}</span>
        <span v-if="item.userId"
          ><img :src="item.userId.avatar.url" alt="" class="avatar q-mr-md"
        /></span>
        <span class="q-mr-md text-capitalize" v-if="item.userId">
          <router-link
            v-bind:to="{
              name: 'author-page',
              params: { id: item.userId._id },
            }"
            class="a__boder"
          >
            {{ item.userId.name }}
          </router-link>
        </span>
      </div>
      <!-- icon section ends here -->
      <div class="paragraph q-my-md text-justify ellipsis-3-lines">
        <div class="text-body1" v-html="item.description"></div>
      </div>

      <div class="button q-mb-xl">
        <router-link
          v-if="typeof item.id !== 'undefined'"
          v-bind:to="{
            name: 'single',
            params: { id: item._id },
          }"
        >
          <q-btn
            label="Continue Reading"
            no-caps
            class="q-mr-lg continue__button"
          />
        </router-link>

        <span>
          <q-icon name="fab fa-facebook-f" size="xs" class="q-mr-xs" />

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
import moment from "moment";
export default {
  props: ["item"],
  data() {
    return {
      // show_filter: false,
    };
  },
  created: function () {
    this.moment = moment;
  },
};
</script>

<style scoped>
.image > img {
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  height: 50vh;
}
.continue__button {
  color: #000;
  border: 1px solid #f47e00 !important;
  border-radius: 50px !important;
}
.continue__button:hover {
  color: #fff;
  background-color: #f47e00 !important;
  border-radius: 50px !important;
}
.text-h3 {
  font-size: 23px;
}
.a__boder,
.router-link-active {
  text-decoration: none !important;
  color: #000 !important;
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
