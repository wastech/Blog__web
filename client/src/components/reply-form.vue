<template>
  <div class="q-mb-xl">
    <div class="text-h6 q-my-md text-weight-bold">Leave a reply:</div>
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
        <div class="col-xs-12 col-sm-6 col-md-4 q-my-xs col-lg-4 col-xl-4">
          <q-input outlined dense v-model="text" placeholder="name" />
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 q-my-xs col-lg-4 col-xl-4">
          <q-input
            v-model="email"
            outlined
            dense
            type="email"
            placeholder="email"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 q-my-xs col-lg-4 col-xl-4">
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
</template>

<script>
export default {};
</script>

<style scoped></style>
