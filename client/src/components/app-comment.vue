<template>
  <div>
    <div class="text-h6 q-my-md text-weight-bold">5 comments</div>
    <!-- comment starts here -->
    <div class="row q-my-xl cm q-pb-xl" v-for="comment in comments" :key="comment">
      <div class="col-xs-3 col-sm-3 col-md-1 col-lg-1 col-xl-1 q-pr-xl">
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
            <a href="">{{ comment.name }}</a>
          </div>
          <div class="text-caption" style="color: #acabab">
            {{ comment.createdAt }}-
            <input
              type="checkbox"
              class="blacklist"
              v-model="show1"
              @change="listChanger()"
            /> <span> Reply</span>
          </div>

          <div class="text-body2">
            {{ comment.body }}
          </div>
        </div>
      </div>
      <!-- comment ends here -->
      <!--  reply start  here -->
      <div class="row q-mt-lg q-ml-xl" v-for="comment in comments" :key="comment">
        <div class="col-xs-3 col-sm-3 col-md-1 col-lg-1 col-xl-1 q-pr-xl">
          <div class="image">
            <img :src="comment.image" alt="" />
          </div>
        </div>
        <div class="col-xs-8 col-sm-9 col-md-10 col-lg-10 col-xl-10 q-ml-sm">
          <div class="text">
            <div class="text-h4 text-weight-bold">
              <a href="">{{ comment.name }} </a>
            </div>
            <div class="text-caption" style="color: #acabab">
              {{ comment.createdAt }} -
              <input
                type="checkbox"
                class="whitelist"
                v-model="show"
                @change="listChanger()"
              />
              <span> Reply</span>
            </div>
            <div class="text-body2">
              {{ comment.body }}
            </div>
          </div>
        </div>
      </div>

      <!-- reply ends here -->
      <!-- reply to reply starts  here -->
      <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="" v-if="show">
          <div class="text-h6 q-my-md text-weight-bold">
            Leave a reply:
            <span class="q-ml-md" @click="show = false"> Cancel Reply </span>
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
                class="col-xs-12 col-sm-6 col-md-4 q-my-xs col-lg-4 col-xl-4"
              >
                <q-input outlined dense v-model="text" placeholder="name" />
              </div>

              <div
                class="col-xs-12 col-sm-6 col-md-4 q-my-xs col-lg-4 col-xl-4"
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
                class="col-xs-12 col-sm-6 col-md-4 q-my-xs col-lg-4 col-xl-4"
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

      <!-- reply ends here -->
      <!-- reply  to comment starts here -->
      <div class="col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="" v-if="show1">
          <div class="text-h6 q-my-md text-weight-bold">
            Leave a reply:
            <span class="q-ml-md" @click="show1 = false">comment </span>
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
                class="col-xs-12 col-sm-6 col-md-4 q-my-xs col-lg-4 col-xl-4"
              >
                <q-input outlined dense v-model="text" placeholder="name" />
              </div>

              <div
                class="col-xs-12 col-sm-6 col-md-4 q-my-xs col-lg-4 col-xl-4"
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
                class="col-xs-12 col-sm-6 col-md-4 q-my-xs col-lg-4 col-xl-4"
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
</template>

<script>
export default {
  data() {
    return {
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

/* form css */
</style>
