<template>
  <div class="main">
    <!-- <app-header /> -->
    <div class="text-h4 text-dark q-my-lg text-bold">Writing</div>
    <div class="title q-pa-xs">
      <div class="text-h5 text-weight-bolder">
        <span class="q-pa-sm">Tag: <span class="" v-html="tag"> </span></span>
      </div>
    </div>
    <div v-for="item in items" :key="item.id">
      <app-item :item="item" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
// import appHeader from "../components/app-header.vue";
import postService from "../services/postService";
import AppItem from "../components/sharedFolder/app-item.vue";

export default {
  name: "PageIndex",
  components: { AppItem },
  data() {
    return {
      tag: [],
      items: [],
      id: this.$route.params.id,
    };
  },
  created: function () {
    this.moment = moment;
  },
  methods: {
    async getPosts() {
      try {
        await postService.getTags(this.id).then((response) => {
          this.items = response.data.tags;
          this.tag = response.data.tags[0].tags;
          console.log(response.data.tags[0].tags);
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
</style>
