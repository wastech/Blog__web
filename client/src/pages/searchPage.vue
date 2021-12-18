<template>
  <div class="main">
    <!-- <app-header /> -->
    <div class="text-h4 text-dark q-my-lg text-bold ">Writing</div>
    <div class="title q-pa-xs">
      <div class="text-h5">
        <span class="q-pa-sm text-weight-bolder"
          >Search Results for : {{ keyword }}</span
        >
      </div>
    </div>
    <section v-if="items <= 0" class="q-my-lg">
      <div class="text-h4 text-bold q-my-md text-weight-bold">Nothing Found</div>
      <div class="text-body1">
        Sorry, but nothing matched your search terms. Please try again with some
        different keywords.
      </div>
    </section>
    <div v-for="item in items" :key="item">
      <app-item :item="item" />
    </div>
  </div>
</template>

<script>
// import appHeader from "../components/app-header.vue";
import postService from "../services/postService";
import Api from "../services/Api";
import AppItem from "../components/sharedFolder/app-item.vue";

export default {
  components: { AppItem },
  name: "PageIndex",
  data() {
    return {
      items: [],
      description: "",
      userName: "",
      keyword: this.$route.params.keyword,
    };
  },
  methods: {
    async getPosts() {
      try {
        await Api()
          .get(`posts/?keyword=${this.keyword}`)
          .then((response) => {
            this.items = response.data.data;
            console.log(this.items);
          });
      } catch (err) {
        // console.log(err.response);
      }
    },
  },
  async mounted() {
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
.text-h5 {
  padding: 5px 20px;
  font-size: 15px;
  line-height: 27px;
}
</style>
