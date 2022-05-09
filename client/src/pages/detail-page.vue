<template>
  <div class="main q-pa-md">
    <app-item :item="item" />

    <app-author :item="item" />
    <related-post :categoryId="item.categoryId" />
    <!-- <app-comment /> -->
    <div>
      <div class="text-h6 q-my-md text-weight-bold">
        {{ comments.length }} comments
      </div>
      <!-- comment starts here -->
      <div
        class="row q-my-xl cm q-pb-xl"
        v-for="comment in comments"
        :key="comment.id"
      >
        <div class="col-xs-3 col-sm-2 col-md-1 col-lg-1 col-xl-1 q-pr-xl">
          <div class="image">
            <img
              src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          class="
            col-xs-8 col-sm-9 col-md-10 col-lg-10 col-xl-10
            q-pl-xl q-ml-sm
            comment
          "
        >
          <div class="text">
            <div class="text-h4 q-my-xs text-weight-bold">
              <a href="">{{ comment.name }}</a> <q-icon name="far fa-edit" />
            </div>

            <div class="text-caption" style="color: #acabab">
              {{ moment(comment.createdAt).fromNow() }}
            </div>

            <div class="text-body2">
              {{ comment.text }}
            </div>
          </div>
        </div>

        <!-- reply  to comment form starts here -->
      </div>
    </div>
    <!-- app-comment -->

    <div class="q-mb-xl">
      <div class="text-h6 q-my-md text-weight-bold">Leave a Comment:</div>
      <div class="text-body1 q-my-sm">
        Your email address will not be published.
      </div>
      <q-form>
        <q-input
          outlined
          rows="10"
          class="text__area"
          v-model="text"
          clearable
          :rules="[(val) => !!val || 'Field is required']"
          type="textarea"
        />
        <div class="row q-my-md q-col-gutter-sm">
          <div
            class="col-xs-12 col-sm-12 col-md-12 q-my-xs col-lg-12 col-xl-12"
          >
            <q-input
              outlined
              dense
              type="text"
              v-model="name"
              :rules="[(val) => !!val || 'Field is required']"
              placeholder="name"
            />
          </div>
        </div>

        <q-btn
          outline
          size="md"
          rounded
          type="submit"
          no-caps
          @click.prevent="onSubmit"
          color="grey-13"
          label="Post Comment"
        />
        <!-- ... -->
      </q-form>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { defineAsyncComponent } from "vue";
import postService from "../services/postService";
import commentService from "../services/commentService";

export default {
  components: {
    AppItem: defineAsyncComponent(() =>
      import("components/sharedFolder/app-itemd.vue")
    ),

    RelatedPost: defineAsyncComponent(() =>
      import("components/related-post.vue")
    ),

    AppAuthor: defineAsyncComponent(() => import("components//app-author.vue")),
  },
  name: "PageIndex",
  data() {
    return {
      id: this.$route.params.id,
      showInside: false,
      text: "",
      name: "",
      comments: [],
      replies: [],
      item: {},
    };
  },
  created: function () {
    this.moment = moment;
  },

  methods: {
    async onSubmit() {
      const comment = {
        postId: this.id,
        text: this.text,
        name: this.name,
      };

      try {
        await commentService.postComment(comment).then((response) => {
          this.getComments();
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            position: "center",
            message: "Comment sent",
          });
        });
      } catch (error) {
        console.log("error", error);
        this.$q.notify({
          type: "negative",
          timeout: 1000,
          position: "center",
          message: "All Fields are required ",
        });
      }
      this.text = "";
      this.name = "";
    },
    async getPost() {
      try {
        await postService.showpost(this.id).then((response) => {
          this.item = response.data.post;
        });
      } catch (err) {
        console.log(err);
      }
    },
    async getComments() {
      try {
        await commentService.getComments(this.id).then((response) => {
          this.comments = response.data.data;
        });
      } catch (err) {
        console.log(err);
      }
    },
  },

  async mounted() {
    this.getPost();
    this.getComments();
  },
};
</script>

<style scoped>
.main {
  max-width: 970px;
  margin: 0 auto;
}

img {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: contain;
}
.text-h4 {
  font-size: 15px;
}
a {
  text-decoration: none;

  color: #222;
}
a:hover {
  text-decoration: none;

  color: #222;
  border-bottom: 2px dotted #ccc;
}
.text-body2 {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.01786em;
}
.comment {
  border-left: 1px solid #ececec;
  padding-left: 20px;
}
.cm {
  border-bottom: 1px dotted #ddd;
}
.text-h6 {
  font-size: 15px;
  line-height: 27px;
  word-break: break-word;
}
span {
  color: #f47e00;
}
.far {
  color: #ededed;
  margin-left: 10px;
  font-size: 14px;
}
</style>
