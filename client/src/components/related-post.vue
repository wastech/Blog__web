<template>
  <div class="q-my-xl">
    <div class="text-h6 q-my-md text-weight-bold" >Related Posts:</div>
    <div class="row q-col-gutter-lg">
      <div
        class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"
        v-for="item in items"
        :key="item"
      >
        <div class="image">
          <img :src="item.image" alt="" />
        </div>
        <div class="text q-mb-xl">
          <div class="text-h4 text-bold">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <q-separator />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/yellow-and-gray-industrial-office-PFDQ5CR-1-455x310.jpg",
          title: "Cosy Bright Office In Yellow And Grey Colors",
        },
        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/black-woman-smiling-with-hands-in-hair-PMCFL93-1-455x310.jpg",
          title: "Beautiful Woman Smiling With Hands In Hair",
        },
        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/Blue-Enterior-Design-455x310.jpg",
          title: "My Adventure in Alps, One of The Heighest Mountains!",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}
.text-h4 {
  color: #222;
  font-size: 15px;
  line-height: 27px;
  word-break: break-word;
}
.text-h3 {

}
</style>
