<template>
  <div class="main q-my-xl">
    <!-- <app-header /> -->
    <div class="text-h4 text-dark q-my-lg text-bold">Writing</div>
    <div class="title q-pa-xs">
      <div class="text-h5 text-weight-bolder">
        <span class="q-pa-sm">Hi, I Am John Doe</span>
      </div>
    </div>
    <div class="image">
      <img
        src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/Father-and-Child.jpg"
        alt=""
      />
    </div>
    <div class="paragraph">
      <div class="text-body1">
        It’s no secret that the digital industry is booming. From exciting
        startups to global brands, companies are reaching out to digital
        agencies, responding to the new possibilities available. However, the
        industry is fast becoming overcrowded, heaving with agencies offering
        similar services — on the surface, at least.
      </div>
      <div class="text-body1 q-mb-xl">
        Producing creative, fresh projects is the key to standing out. Unique
        side projects are the best place to innovate, but balancing commercially
        and creatively lucrative work is tricky. So, this article looks at how
        to make side projects work and why they’re worthwhile, drawing on
        lessons learned from our development of the ux ompanion app.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      body: "",
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
img {
  max-width: 100%;
  height: auto;
}
.text-body1 {
  font-size: 16px;
  line-height: 29px;
}
</style>
