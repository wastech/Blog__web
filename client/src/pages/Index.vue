<template>
  <div class="main q-pa-md">
    <div class="text-h4 text-dark q-my-xl text-bold">Writing</div>
    <!-- <app-header /> -->
    <div class="" v-for="item in items" :key="item">
      <div class="image" v-if="item.imageUrl">
        <img :src="item.imageUrl" alt="" />
      </div>
      <div class="text">
        <div class="title text-left text-dark q-mt-sm q-mb-none">
          <router-link
            v-bind:to="{
              name: 'single',
              params: { id: item._id },
            }"
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
            v-bind:to="{
              name: 'category',
              params: { id: item.categoryId._id },
            }"
          >
            <span class="q-mr-md" v-if="item.categoryId"
              >In {{ item.categoryId.title }}
            </span>
          </router-link>

          <span class="q-mr-md" v-for="tag in item.tags" :key="tag"
            >Tags
            <router-link
              v-bind:to="{
                name: 'tags',
                params: { id: tag },
              }"
            >
              {{ tag }}
            </router-link>
          </span>

          <span class="q-mr-md">{{ moment(item.createdAt).fromNow() }}</span>
          <!-- <span class="q-mr-md"><a href="">2 comments</a> </span> -->
          <span
            ><img :src="item.userId.avatar.url" alt="" class="avatar q-mr-md"
          /></span>
          <span class="q-mr-md text-capitalize" v-if="item.userId">
            <router-link
              v-bind:to="{
                name: 'author-page',
                params: { id: item.userId._id },
              }"
            >
              <a href="">{{ item.userId.name }}</a>
            </router-link>
          </span>
        </div>
        <!-- icon section ends here -->

        <!-- paragraph starts here -->
        <div class="paragraph q-my-md text-justify ellipsis-3-lines">
          <div class="text-body1" v-html="item.description"></div>
        </div>

        <div class="button q-mb-xl">
          <q-btn
            label="Continue Reading"
            no-caps
            class="q-mr-lg continue__button"
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

            <!-- <ShareNetwork
                network="twitter"
               :url="`http://localhost:8080/single` + item._id"
                :title="item.title"


              > -->
            <q-icon name="fab fa-twitter" size="xs" class="q-mr-xs" />
            <!-- </ShareNetwork> -->

            <q-icon
              name="fab fa-google-plus-g"
              size="xs"
              class="q-mr-xs"
            ></q-icon>
          </span>
        </div>
        <div class="q-pa-lg flex flex-center"></div>
      </div>
    </div>
    <div class="q-pa-lg flex flex-center" v-if="page">
      <q-pagination
        v-model="page"
        :min="currentPage"
        :max="lastPage"
        input
        input-class="text-orange-10"
        @input="goAnotherPage"
      >
      </q-pagination>
    </div>
  </div>
</template>

<script>
import moment from "moment";
// import appHeader from "../components/app-header.vue";
import postService from "../services/postService";
import Api from "../services/Api";

export default {
  name: "PageIndex",
  data() {
    return {
      page: 0,
      currentPage: 0,
      lastPage: 0,
      tags: [],
      show_filter: false,
      items: [],
    };
  },
  created: function () {
    this.moment = moment;
    //   this.queryindex();
    // this.showIn();
  },

  methods: {
    async queryindex() {
      try {
        Api()
          .get(`posts`)
          .then((response) => {
            this.items = response.data.data;
            this.page = response.data.current_page;
            this.current_page = response.data.current_page;
            this.lastPage = response.data.pagination.next.page;
          });
      } catch (err) {
        console.log(err.response);
      }
    },
    goAnotherPage(page) {
      axios
        .get(`posts?page=${page}`)
        .then((response) => {
          if (response.data) {
            this.items = response.data.data;
            console.log(response.data.data);
          } else {
          }
        })
        .catch((error) => {});
    },
  },
  async mounted() {
    this.queryindex();
    this.goAnotherPage();
  },
};
</script>

<style scoped>
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
.main {
  max-width: 970px;
  margin: 0 auto;
}
.image > img {
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  height: 50vh;
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
