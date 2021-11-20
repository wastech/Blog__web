<template>
  <div class="main">
    <div v-for="item in items" :key="item">
      <app-item :item="item" />
    </div>
    <app-author/>
    <related-post />
    <reply-form/>
  </div>
</template>

<script>
import AppAuthor from '../components/app-author.vue';
import RelatedPost from "../components/related-post.vue";
import ReplyForm from '../components/reply-form.vue';
import AppItem from "../components/sharedFolder/app-item.vue";

export default {
  components: { AppItem, RelatedPost, ReplyForm, AppAuthor },
  name: "PageIndex",
  data() {
    return {
      current: 3,
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
};
</script>

<style scoped>
.main {
  max-width: 970px;
  margin: 0 auto;
}
</style>
