<template>
  <div>
    <div class="text-h6 q-my-md text-weight-bold">5 comments</div>
    <div class="row q-my-xl cm" v-for="item in items" :key="item">
      <div class="col-xs-4 col-sm-3 col-md-1 col-lg-1 col-xl-1 q-pr-xl">
        <div class="image">
          <img :src="item.image" alt="" />
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
            <a href="">{{ item.name }}</a>
          </div>
          <div class="text-caption" style="color: #acabab">
            {{ item.createdAt }} <span>-</span>
          </div>
          <div class="text-body2">
            {{ item.body }}
          </div>
        </div>
      </div>

      <div class="row q-mt-lg q-ml-xl" v-for="item in items" :key="item">
        <div class="col-xs-4 col-sm-3 col-md-1 col-lg-1 col-xl-1 q-pr-xl">
          <div class="image">
            <img :src="item.image" alt="" />
          </div>
        </div>
        <div class="col-xs-8 col-sm-9 col-md-10 col-lg-10 col-xl-10 q-ml-sm">
          <div class="text">
            <div class="text-h4 text-weight-bold">
              <a href="">{{ item.name }}</a>
            </div>
            <div class="text-caption" style="color: #acabab">
              {{ item.createdAt }} <span>-</span>
            </div>
            <div class="text-body2">
              {{ item.body }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author.jpg",
          name: "ahmad",
          createdAt: "May 22, 2015 at 7:49 am",
          body: " The names John Doe is used as placeholder names for a party whostrue identity is unknown or must be withheld in a legal action,case, or discussion. The names are also used to refer to a corpse.",
        },
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
/* .cm {
  border-bottom: 1px dotted #ddd;
  display: inline-block;

} */
</style>
