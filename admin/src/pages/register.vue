<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '40%' }"
        >
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">Register</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-sm">
              <q-input
                filled
                v-model="username"
                :rules="[(val) => !!val || 'Field is required']"
                label="Username"
                lazy-rules
              />
              <q-input
                filled
                type="email"
                :rules="[(val) => !!val || 'Field is required']"
                v-model="email"
                label="email"
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                :rules="[(val) => !!val || 'Field is required']"
                lazy-rules
              />

              <div>
                <q-file
                  outlined
                  v-model="model"
                  :rules="[(val) => !!val || 'Field is required']"
                >
                  <template v-slot:prepend>
                    <q-icon name="fas fa-paperclip" />
                  </template>
                </q-file>

                <q-input
                  outlined
                  rows="5"
                  :rules="[(val) => !!val || 'Field is required']"
                  v-model="body"
                  clearable
                  type="textarea"
                />

                <q-btn
                  label="register"
                  type="submit"
                  class="full-width"
                  color="primary"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      model: "",
    };
  },
};
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
