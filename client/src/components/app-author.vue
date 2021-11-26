<template>
  <div>
    <div class="row q-pa-md">
      <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 col-xl-2">
        <div class="image" v-if="item.userId">
          <img :src="item.userId.avatar.url" alt="" />
        </div>
      </div>
      <div
        class="col-xs-8 col-sm-9 col-md-10 col-lg-10 col-xl-10"
        v-if="item.userId"
      >
        <div class="text">
          <div class="text-h4 q-my-xs text-weight-bold">
            <a href="">{{ item.userId.name }}</a>
          </div>
          <div class="text-body2">
            {{ item.userId.description }}
          </div>
        </div>
      </div>
    </div>

    <q-separator />
  </div>
</template>

<script>
export default {
  props:["item"]
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
</style>
