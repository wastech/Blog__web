<template>
  <div class="main">
    <div class="text-captio" v-if="loading"></div>
    <section v-else>
      <div class="text-h4 text-dark q-my-lg text-bold">Writing</div>
      <div class="title q-pa-xs">
        <div class="text-h5 text-weight-bolder">
          <span class="q-pa-sm text-capitalize">Category: {{ category }}</span>
        </div>
      </div>
      <div v-for="item in items" :key="item.id">
        <app-item :item="item" />
      </div>
    </section>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import postService from "../services/postService";

export default {
  name: "PageIndex",
  components: {
    AppItem: defineAsyncComponent(() =>
      import("components/sharedFolder/app-item.vue")
    ),
  },
  data() {
    return {
      loading: true,
      category: "",
      items: [],
      id: this.$route.params.id,
    };
  },

  methods: {
    async getPosts() {
      try {
        await postService.getCategories(this.id).then((response) => {
          this.items = response.data.categories;
          this.category = response.data.categories[0].categoryId.title;
        });
      } catch (err) {
        console.log(err.response);
      } finally {
        this.$q.loading.hide();
        this.loading = false;
      }
    },
  },
  async mounted() {
    this.$q.loading.show();
    this.getPosts();
  },
};
</script>

<style scoped>
.main {
  max-width: 970px;
  margin: 0 auto;
}
.title {
  border: 1px solid #eee;
  border-radius: 30px;
  margin-bottom: 30px;
}

span {
  background-color: #f2f2f2;
  border: none;

  border-radius: 30px;
  color: #000;
  box-sizing: border-box;
  font-size: 17px;
}
</style>
