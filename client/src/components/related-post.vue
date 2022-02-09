<template>
  <div class="q-my-xl">
    <div class="text-h6 q-my-md text-weight-bold">Related Posts:</div>
    <div class="row q-col-gutter-lg">
      <div
        class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 q-my-xs"
        v-for="item in items"
        :key="item"
      >
        <div class="image "  v-if="item.imageUrl">
          <img :src="item.imageUrl" class=" shadow-3" alt="" />
        </div>
        <div class="text q-mb-xl">
          <router-link
            v-bind:to="{
              name: 'single',
              params: { id: item._id },
            }"
          >
            <div class="text-h4 text-bold">{{ item.title }}</div>
          </router-link>
        </div>
      </div>
    </div>
    <q-separator />
  </div>
</template>

<script>
import moment from "moment";
import postService from "../services/postService";

export default {
  name: "PageIndex",
  props: ["categoryId"],
  data() {
    return {
      items: [],
    };
  },
  created: function () {
    this.moment = moment;
  },
  watch: {
    $props: {
      handler: async function (newProps) {
        await postService
          .getRelated(newProps.categoryId._id)
          .then((response) => {
            this.items = response.data.categories;
          });
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 23vh;
  object-fit: cover;
  border-radius: 10px;
}
.text-h4 {
  color: #222;
  font-size: 15px;
  line-height: 27px;
  word-break: break-word;
}
</style>
