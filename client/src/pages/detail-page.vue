<template>
  <div class="main q-pa-md">
    <app-item :item="item" />

    <app-author :item="item" />
    <related-post :categoryId="item.categoryId" />
    <!-- <app-comment /> -->
    <div>
      <div class="text-h6 q-my-md text-weight-bold">{{comments.length }} comments</div>
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

        <!--  reply start  here -->
        <!-- <div
          class="row q-mt-lg q-ml-xl"
          v-for="reply in comment.replies"
          :key="reply"
        >
          <div class="col-xs-3 col-sm-2 col-md-1 col-lg-1 col-xl-1 q-pr-xl">
            <div class="image">
              <img
                src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author.jpg"
                alt=""
              />
            </div>
          </div> -->
        <!-- <div class="col-xs-8 col-sm-9 col-md-10 col-lg-10 col-xl-10 q-ml-sm">
            <div class="text">
              <div class="text-h4 text-weight-bold">
                <a href="">{{ reply.rName }} </a> <q-icon name="far fa-edit" />
              </div>
              <div class="text-caption" style="color: #acabab">
                {{ moment(reply.createdAt).fromNow() }} - -->
        <!-- <input
                  type="checkbox"
                  class="whitelist"
                  v-model="show1"
                  @change="listChanger()"
                /> -->

        <!-- <span class="text-weight-bold"> Reply</span>
              </div>
              <div class="text-body2">
                {{ reply.rText }}
              </div>
            </div> -->

        <!--
          </div> -->
        <!-- <div
            class="col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            v-if="showInside"
            v-click-outside="closeEvent"
          >
            <div class="">
              <div class="text-h6 q-my-md text-weight-bold">
                Leave a reply:

                <span class="q-ml-sm text-weight-bold"
                  >Cancel Reply
                  <button class="button" @click="hide">Close</button></span
                >
              </div>
              <div class="text-body1 q-my-sm">
                Your email address will not be published.
              </div>

              <q-form>
                <q-input
                  outlined
                  rows="10"
                  class="text__area"
                  clearable
                  type="textarea"
                  v-model="rText"
                />
                <div class="row q-my-md q-col-gutter-sm">
                  <div
                    class="
                      col-xs-12 col-sm-4 col-md-4
                      q-my-xs
                      col-lg-4 col-xl-4
                    "
                  >
                    <q-input
                      outlined
                      dense
                      v-model="rName"
                      type="text"
                      placeholder="name"
                    />
                  </div>

                  <div
                    class="
                      col-xs-12 col-sm-4 col-md-4
                      q-my-xs
                      col-lg-4 col-xl-4
                    "
                  >
                    <q-input
                      v-model="rEmail"
                      outlined
                      dense
                      type="email"
                      placeholder="email"
                    />
                  </div>
                  <div
                    class="
                      col-xs-12 col-sm-4 col-md-4
                      q-my-xs
                      col-lg-4 col-xl-4
                    "
                  >
                    <q-input
                      v-model="weblink"
                      dense
                      outlined
                      type="url"
                      placeholder="website"
                    />
                  </div>
                </div>

                <q-btn
                  outline
                  size="md"
                  rounded
                  type="submit"
                  @click.prevent="onReply(comment.id)"
                  no-caps
                  color="grey-13"
                  label="Post reply"
                />

              </q-form>
            </div>
          </div> -->
        <!-- </div> -->

        <!-- reply  to comment form starts here -->
      </div>
    </div>
    <!-- app-comment -->
    <!-- <reply-form /> -->
    <add-comment :postId="item._id" />
  </div>
</template>

<script>
import moment from "moment";
import postService from "../services/postService";
import commentService from "../services/commentService";
import replyService from "../services/replyService";
import AppAuthor from "../components/app-author.vue";
// import AppComment from "../components/app-comment.vue";
import RelatedPost from "../components/related-post.vue";
// import ReplyForm from "../components/reply-form.vue";
import AppItem from "../components/sharedFolder/app-itemd.vue";
import AddComment from "../components/comments/addComment.vue";

export default {
  components: { AppItem, RelatedPost, AppAuthor, AddComment },
  name: "PageIndex",
  data() {
    return {
      id: this.$route.params.id,
      rText: "",
      showInside: false,
      rName: "",
      weblink: "",
      rEmail: "",
      comments: [],
      replies: [],
      item: {},
    };
  },
  created: function () {
    this.moment = moment;
  },

  methods: {
    show: function () {
      this.showInside = true;
    },
    hide: function () {
      console.log("hide");
      this.showInside = false;
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

          // this.replies = response.data.data.replies;
        });
      } catch (err) {
        console.log(err);
      }
    },
    //  async getReplies(commentId) {
    //   try {
    //     await replyService.getReply(commentId).then((response) => {
    //       this.replies = response.data.data;

    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async onReply(commentId) {
      const rComment = {
        commentId: commentId,
        rText: this.rText,
        rName: this.rName,
        weblink: this.weblink,
        rEmail: this.rEmail,
      };
      try {
        console.log(rComment);
        await replyService.createReply(rComment).then((response) => {
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
          message: "All Fields required and must be at least 4 characters long",
        });
      }
      // this.text = "";
      // this.name = "";
      // this.email = "";
      // this.url = "";
    },
  },
  events: {
    closeEvent: function () {
      console.log("close event called");
      this.hide();
    },
  },
  async mounted() {
    this.getPost();
    this.getComments();
    // this.getReplies()
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
