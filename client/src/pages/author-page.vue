<template>
  <div class="main">
    <!-- <app-header /> -->
    <div class="text-h4 text-dark q-my-lg text-bold">Writing</div>
    <div class="title q-pa-xs">
      <div class="text-h5">
        <span class="q-pa-sm text-weight-bolder">Author: {{ userName }}</span>
        <q-icon class="" name="fas fa-long-arrow-alt-right" />
        {{ description }}
      </div>
    </div>
    <div v-for="item in items" :key="item">
      <app-item :item="item" />
    </div>
  </div>
</template>

<script>
// import appHeader from "../components/app-header.vue";
import postService from "../services/postService";
import AppItem from "../components/sharedFolder/app-item.vue";

export default {
  components: { AppItem },
  name: "PageIndex",
  data() {
    return {
      items: [],
      description: "",
      userName: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    async getPosts() {
      try {
        await postService.sigleUserPosts(this.id).then((response) => {
          this.items = response.data.userPosts;
          this.userName = response.data.userPosts[0].userId.name;
          this.description = response.data.userPosts[0].userId.description;
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
