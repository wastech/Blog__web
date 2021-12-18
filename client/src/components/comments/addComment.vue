<template>
  <div class="main q-pa-md">
    <!-- <reply-form /> -->
    <div class="q-mb-xl">
      <div class="text-h6 q-my-md text-weight-bold">Leave a reply:</div>
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
          <div class="col-xs-12 col-sm-4 col-md-4 q-my-xs col-lg-4 col-xl-4">
            <q-input
              outlined
              dense
              type="text"
              v-model="name"
              :rules="[(val) => !!val || 'Field is required']"
              placeholder="name"
            />
          </div>

          <div class="col-xs-12 col-sm-4 col-md-4 q-my-xs col-lg-4 col-xl-4">
            <q-input
              v-model="email"
              outlined
              dense
              :rules="[(val) => !!val || 'Field is required']"
              type="email"
              placeholder="email"
            />
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-my-xs col-lg-4 col-xl-4">
            <q-input
              v-model="url"
              dense
              outlined
              type="url"
              :rules="[(val) => !!val || 'Field is required']"
              placeholder="website"
            />
          </div>
        </div>

        <q-btn
          outline
          size="md"
          rounded
          type="submit"
          no-caps
          @click="onSubmit()"
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
import commentService from "../../services/commentService";

export default {
  name: "addcomment",
  props: ["postId"],

  data() {
    return {
      text: "",
      name: "",
      url: "",
      email: "",
    };
  },
  created: function () {
    this.moment = moment;
  },
  methods: {
    //  async getReplies(commentId) {
    //   try {
    //     await replyService.getReply(commentId).then((response) => {
    //       this.replies = response.data.data;

    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // async getComments() {
    //   try {
    //     await commentService.getComments(this.id).then((response) => {
    //       this.comments = response.data.data;
    //       // this.replies = response.data.data.replies;
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async onSubmit() {
      const comment = {
        postId: this.postId,
        text: this.text,
        name: this.name,
        url: this.url,
        email: this.email,
      };
      console.log(comment);
      try {
        await commentService.postComment(comment).then((response) => {
          // this.getComments();
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
      this.text = "";
      this.name = "";
      this.email = "";
      this.url = "";
    },
    // async onReply(commentId) {
    //   const rComment = {
    //     commentId: commentId,
    //     rText: this.rText,
    //     rName: this.rName,
    //     weblink: this.weblink,
    //     rEmail: this.rEmail,
    //   };
    //   try {
    //     console.log(rComment);
    //     await replyService.createReply(rComment).then((response) => {
    //       this.getComments();
    //       this.$q.notify({
    //         type: "positive",
    //         timeout: 1000,
    //         position: "center",
    //         message: "Comment sent",
    //       });
    //     });
    //   } catch (error) {
    //     console.log("error", error);
    //     this.$q.notify({
    //       type: "negative",
    //       timeout: 1000,
    //       position: "center",
    //       message: "All Fields required and must be at least 4 characters long",
    //     });
    //   }
    //   // this.text = "";
    //   // this.name = "";
    //   // this.email = "";
    //   // this.url = "";
    // },
  },
  async mounted() {
    // this.getPost();
    // this.getComments();
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
