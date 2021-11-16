<template>
  <div class="main">
    <div class="text-h4 text-dark q-my-xl text-bold">Writing</div>
    <div class="image">
      <img
        src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg"
        alt=""
      />
    </div>
    <div class="text">
      <div class="title text-left text-dark q-mt-sm q-mb-xs">
        <div class="text-h3 text-bold text-capitalize">
          Loft Office With Vintage Decor For Creative Working
        </div>
      </div>

      <!-- icon section starts here -->
      <div class="blog__span text-left q-my-xs">
        <span
          ><q-icon name="fas fa-camera-retro" class="q-mr-md"></q-icon>
        </span>
        <span class="q-mr-md">In <a href="">images post</a> </span>
        <span class="q-mr-md">Tags <a href="">design</a> </span>
        <span class="q-mr-md">May 17, 2015</span>
        <span class="q-mr-md"><a href="">Leave a comment</a> </span>
        <span
          ><img
            src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author-50x50.jpg"
            alt=""
            class="avatar q-mr-md"
        /></span>
        <span class="q-mr-md text-capitalize"><a href="">aremu aremu</a> </span>
      </div>
      <!-- icon section ends here -->

      <!-- paragraph starts here -->
      <div class="paragraph q-my-md text-justify">
        <div class="text-body1">
          It’s no secret that the digital industry is booming. From exciting
          startups to global brands, companies are reaching out to digital
          agencies, responding to the new possibilities available. However, the
          industry is fast becoming overcrowded, heaving with agencies offering
          similar services — on the surface, at least. Producing creative, fresh
          projects is the key to standing out. Unique side projects are the best
          place to innovate, but balancing commercially and creatively lucrative
          work is tricky. So, this article looks at
        </div>
      </div>

      <div class="button">
        <q-btn outline rounded label="Continue Reading" no-caps />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image > img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: auto;
}
.text-h3 {
  font-size: 23px;
}
a {
  text-decoration: none;

  color: #222;
  border-bottom: 2px dotted #ccc;
  padding-bottom: 1px;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  object-fit: cover;
}
span {
  color: #666;
  font-size: 12px;
}
.text {
  max-width: 800px;
  margin: 0 auto;
}
.text-body1 {
  font-size: 14px;
  line-height: 26px;
}
.q-btn:hover {
  background-color: #f47e00 !important;
  border-color: #f47e00;
  color: #fff;
}
</style>
