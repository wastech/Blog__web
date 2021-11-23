<template>
  <div>
    <div class="q-my-sm flex flex-center">
      <q-form
        v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '70%' }"
      >
        <div class="row q-col-gutter-sm">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-my-xs"
          >
            <q-input
              filled
              v-model="text"
              :rules="[(val) => !!val || 'Field is required']"
              label="Category Title"
              stack-label
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <q-btn
              label="post"
              type="submit"
              class="full-width"
              color="primary"
            />
          </div>
        </div>
      </q-form>
    </div>
    <div
      class="text q-my-xl"
      v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '70%' }"
    >
      <div class="row">
        <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <q-card-section class="bg-primary text-white">
            <div class="text-caption">Our Changing Planet</div>
          </q-card-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
