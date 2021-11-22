<template>
  <div class="main">
    <!-- <app-header /> -->
    <div class="text-h4 text-dark q-my-lg text-bold">Writing</div>
    <div class="title q-pa-xs">
      <div class="text-h5">
        <span class="q-pa-sm text-weight-bolder">Author: John Doe</span>
        <q-icon class="text-weight-bold" name="fas fa-long-arrow-alt-right" />
        The names "John Doe" is used as placeholder names for a party whose true
        identity is unknown or must be withheld in a legal action, case, or
        discussion. The names are also used to refer to a corpse.
      </div>
    </div>
    <div v-for="item in items" :key="item">
      <app-item :item="item" />
    </div>
  </div>
</template>

<script>
// import appHeader from "../components/app-header.vue";
import AppItem from "../components/sharedFolder/app-item.vue";

export default {
  components: { AppItem },
  name: "PageIndex",
  data() {
    return {
      items: [
        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg",
          title: "Loft Office With Vintage Decor For Creative Working",
          description:
            " It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offerin  similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at",
          category: "images post",
          tags: "design",
          createdAt: "May 17, 2015",
          authorImage:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author-50x50.jpg",
          name: "aremu aremu",
        },

        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg",
          title: "Loft Office With Vintage Decor For Creative Working",
          description:
            " It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offerin  similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at",
          category: "images post",
          tags: "design",
          createdAt: "May 17, 2015",
          authorImage:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author-50x50.jpg",
          name: "aremu aremu",
        },
        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg",
          title: "Loft Office With Vintage Decor For Creative Working",
          description:
            " It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offerin  similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at",
          category: "images post",
          tags: "design",
          createdAt: "May 17, 2015",
          authorImage:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author-50x50.jpg",
          name: "aremu aremu",
        },
        {
          image:
            "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg",
          title: "Loft Office With Vintage Decor For Creative Working",
          description:
            " It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offerin  similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at",
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
