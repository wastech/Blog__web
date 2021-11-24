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
                v-model="name"
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
                <div class="col-12 q-my-md">
                  <input
                    dark
                    outlined
                    type="file"
                    ref="file"
                    @change="onSelect()"
                  />
                </div>

                <q-input
                  outlined
                  rows="5"
                  :rules="[(val) => !!val || 'Field is required']"
                  v-model="description"
                  clearable
                  type="textarea"
                />

                <q-btn
                  label="register"
                  type="submit"
                  class="full-width"
                  color="primary"
                  v-on:click.prevent="validateInputs"
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
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      name: "",
      file: "",
      password: "",
      email: "",
      description: "",
    };
  },
  methods: {
    validateInputs() {
      this.signUp();
    },
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    async signUp() {
      try {
        let formData = new FormData();
        formData.append("avatar", this.file);
        formData.append("email", this.email);
        formData.append("name", this.name);
        formData.append("password", this.password);
        formData.append("description", this.description);
        const response = await AuthenticationService.register(formData);
        this.$q.notify({
          type: "positive",
          timeout: 2000,
          position: "center",
          message: "success",
        });
        this.$router.push({
          name: "login",
        });
      } catch (error) {
        this.$q.notify({
          type: "negative",
          multiLine: true,
          timeout: 2000,
          position: "center",
          message: error.response.data.error,
        });
      }
    },
  },
};
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
