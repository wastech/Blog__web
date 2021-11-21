<template>
  <div class="main">
    <!-- <app-header /> -->
    <div class="text-h4 text-dark q-my-lg text-bold">Writing</div>
    <div class="title q-pa-xs">
      <div class="text-h5 text-weight-bolder">
        <span class="q-pa-sm">Talk To Me Anytime :)</span>
      </div>
    </div>
    <div class="image">
      <img
        src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/Working-Man-With-Note.jpg"
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
    </div>

    <div class="form q-my-xl">
      <q-form >
        <div class="row">
          <div class="col-xs-8 col-sm-8 col-md-7 col-lg-6 col-xl-6 q-my-lg">
            <div class="text-caption">Your Name (required)</div>
            <q-input
              :rules="[(val) => !!val || 'Field is required']"
              v-model="name"
              outlined
              type="text"
              dense
            />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-8 col-sm-8 col-md-7 col-lg-6 col-xl-6 q-my-lg">
            <div class="text-caption">Your Email (required)</div>

            <q-input
              outlined
              type="email"
              :rules="[(val) => !!val || 'Field is required']"
              v-model="email"
              dense
            />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-8 col-sm-8 col-md-7 col-lg-6 col-xl-6 q-my-lg">
            <div class="text-caption">Subject</div>
            <q-input
              outlined
              dense
              type="text"
              :rules="[(val) => !!val || 'Field is required']"
              v-model="subject"
            />
          </div>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-my-lg"
          >
            <div class="text-caption">Your Message</div>
            <q-input
              outlined
              rows="10"
              :rules="[(val) => !!val || 'Field is required']"
              v-model="body"
              clearable
              type="textarea"
            />
          </div>
        </div>

        <q-btn
          outline
          size="md"
          rounded
          no-caps
          type="submit"
          color="grey-13"
          class="q-pl-md q-mr-md"
          label="Send "
        />
      </q-form>
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
