<template>
  <div class="main q-pa-md">
    <div v-for="item in items" :key="item">
      <app-item :item="item" />
    </div>
    <app-author />
    <related-post />
    <!-- <app-comment /> -->
    <div>
      <div class="text-h6 q-my-md text-weight-bold">5 comments</div>
      <!-- comment starts here -->
      <div
        class="row q-my-xl cm q-pb-xl"
        v-for="comment in comments"
        :key="comment"
      >
        <div class="col-xs-3 col-sm-2 col-md-1 col-lg-1 col-xl-1 q-pr-xl">
          <div class="image">
            <img :src="comment.image" alt="" />
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
              {{ comment.createdAt }}-
              <input
                type="checkbox"
                class="blacklist"
                v-model="show1"
                @change="listChanger()"
              />
              <span class="text-weight-bold"> Reply</span>
            </div>

            <div class="text-body2">
              {{ comment.body }}
            </div>
          </div>
        </div>
        <!-- comment ends here -->
        <!--  reply start  here -->
        <div
          class="row q-mt-lg q-ml-xl"
          v-for="comment in comments"
          :key="comment"
        >
          <div class="col-xs-3 col-sm-2 col-md-1 col-lg-1 col-xl-1 q-pr-xl">
            <div class="image">
              <img :src="comment.image" alt="" />
            </div>
          </div>
          <div class="col-xs-8 col-sm-9 col-md-10 col-lg-10 col-xl-10 q-ml-sm">
            <div class="text">
              <div class="text-h4 text-weight-bold">
                <a href="">{{ comment.name }} </a> <q-icon name="far fa-edit" />
              </div>
              <div class="text-caption" style="color: #acabab">
                {{ comment.createdAt }} -
                <input
                  type="checkbox"
                  class="whitelist"
                  v-model="show"
                  @change="listChanger()"
                />
                <span class="text-weight-bold"> Reply</span>
              </div>
              <div class="text-body2">
                {{ comment.body }}
              </div>
            </div>
          </div>
          <!-- reply ends here -->
          <!-- reply to reply starts  here -->
          <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="" v-if="show">
              <div class="text-h6 q-my-md text-weight-bold">
                Leave a reply:
                <span class="q-ml-sm text-weight-bold" @click="show = false">
                  Cancel Reply
                </span>
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
                />
                <div class="row q-my-md q-col-gutter-sm">
                  <div
                    class="
                      col-xs-12 col-sm-4 col-md-4
                      q-my-xs
                      col-lg-4 col-xl-4
                    "
                  >
                    <q-input outlined dense v-model="text" placeholder="name" />
                  </div>

                  <div
                    class="
                      col-xs-12 col-sm-4 col-md-4
                      q-my-xs
                      col-lg-4 col-xl-4
                    "
                  >
                    <q-input
                      v-model="email"
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
                      v-model="url"
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
                  no-caps
                  color="grey-13"
                  label="Post Comment"
                />
                <!-- ... -->
              </q-form>
            </div>
          </div>
        </div>

        <!-- reply ends here -->
        <!-- reply  to comment starts here -->
        <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="" v-if="show1">
            <div class="text-h6 q-my-md text-weight-bold">
              Leave a reply:
              <span class="q-ml-sm text-weight-bold" @click="show1 = false"
                >Cancel Reply
              </span>
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
              />
              <div class="row q-my-md q-col-gutter-sm">
                <div
                  class="col-xs-12 col-sm-4 col-md-4 q-my-xs col-lg-4 col-xl-4"
                >
                  <q-input outlined dense v-model="text" placeholder="name" />
                </div>

                <div
                  class="col-xs-12 col-sm-4 col-md-4 q-my-xs col-lg-4 col-xl-4"
                >
                  <q-input
                    v-model="email"
                    outlined
                    dense
                    type="email"
                    placeholder="email"
                  />
                </div>
                <div
                  class="col-xs-12 col-sm-4 col-md-4 q-my-xs col-lg-4 col-xl-4"
                >
                  <q-input
                    v-model="url"
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
                no-caps
                color="grey-13"
                label="Post Comment"
              />
              <!-- ... -->
            </q-form>
          </div>
        </div>
      </div>
    </div>
    <!-- app-comment -->
    <!-- <reply-form /> -->
    <div class="q-mb-xl" v-if="!show & !show1">
      <div class="text-h6 q-my-md text-weight-bold">Leave a reply:</div>
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
        />
        <div class="row q-my-md q-col-gutter-sm">
          <div class="col-xs-12 col-sm-4 col-md-4 q-my-xs col-lg-4 col-xl-4">
            <q-input outlined dense v-model="text" placeholder="name" />
          </div>

          <div class="col-xs-12 col-sm-4 col-md-4 q-my-xs col-lg-4 col-xl-4">
            <q-input
              v-model="email"
              outlined
              dense
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
              placeholder="website"
            />
          </div>
        </div>

        <q-btn
          outline
          size="md"
          rounded
          no-caps
          color="grey-13"
          label="Post Comment"
        />
        <!-- ... -->
      </q-form>
    </div>
  </div>
</template>

<script>
import AppAuthor from "../components/app-author.vue";
// import AppComment from "../components/app-comment.vue";
import RelatedPost from "../components/related-post.vue";
// import ReplyForm from "../components/reply-form.vue";
import AppItem from "../components/sharedFolder/app-item.vue";

export default {
  components: { AppItem, RelatedPost, AppAuthor },
  name: "PageIndex",
  data() {
    return {
      current: 3,
      show: false,
      show1: false,
      comments: [
        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author.jpg",
          name: "ahmad",
          createdAt: "May 22, 2015 at 7:49 am",
          body: " The names John Doe is used as placeholder names for a party whostrue identity is unknown or must be withheld in a legal action,case, or discussion. The names are also used to refer to a corpse.",
        },
      ],
      items: [
        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg",
          title: "Loft Office With Vintage Decor For Creative Working",
          description:
            " It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offerin  similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offerin  similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks a",
          category: "images post",
          tags: "design",
          createdAt: "May 17, 2015",
          authorImage:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author-50x50.jpg",
          name: "aremu aremu",
        },
      ],
    };
  },
  methods: {
    listChanger() {
      if (this.show == true) {
        this.show1 = false;
      } else if (this.show1 == true) {
        this.show = false;
      }
    },
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
