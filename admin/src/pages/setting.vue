<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card class="card-bg text-white">
          <q-card-section class="text-h6">
            <div class="text-h6">Edit Profile</div>
            <div class="text-subtitle2">Complete your profile</div>
          </q-card-section>

          <q-card-section class="q-pa-sm">
            <q-list class="row">
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section side>
                  <div class="col-12 q-my-md">
                    <input
                      dark
                      outlined
                      type="file"
                      ref="file"
                      @change="onSelect()"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dark
                    color="white"
                    dense
                    v-model="name"
                    label="User Name"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dark
                    color="white"
                    dense
                    v-model="email"
                    label="Email Address"
                  />
                </q-item-section>
              </q-item>

              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dark
                    color="white"
                    type="textarea"
                    dense
                    v-model="description"
                    label="About"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              class="text-capitalize bg-info text-white"
              @click="onSubmit"
              type="submit"
              >Update User Info</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
        <q-card class="card-bg text-white">
          <q-card-section class="text-center bg-transparent">
            <q-avatar size="100px" class="shadow-10" v-if="file">
              <img :src="file.url" />
            </q-avatar>
            <!-- <div class="text-subtitle2 q-mt-lg">by Pratik Patel</div> -->
            <div class="text-h6 q-mt-md">{{ name }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-body2 text-justify">
              {{ description }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card class="card-bg text-white">
          <q-card-section class="text-h6 q-pa-sm">
            <div class="text-h6">Change Password</div>
          </q-card-section>
          <q-card-section class="q-pa-sm row">
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section> Current Password </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  dark
                  dense
                  outlined
                  v-model="formData.currentPassword"
                  color="white"
                  round
                  label="Current Password"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section> New Password </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  dark
                  dense
                  outlined
                  color="white"
                  round
                  v-model="formData.newPassword"
                  label="New Password"
                />
              </q-item-section>
            </q-item>
            <!-- <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section> Confirm New Password </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  dark
                  dense
                  outlined
                  round
                  color="white"
                  label="Confirm New Password"
                />
              </q-item-section>
            </q-item> -->
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              class="text-capitalize bg-info text-white"
              type="submit"
              @click="updatePass"
              >Change Password</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      name: "",
      email: "",
      description: "",
      file: "",
      formData: {
        currentPassword: "",
        newPassword: "",
      },
    };
  },
  methods: {
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    async onSubmit() {
      try {
        let formData = new FormData();
        formData.append("avatar", this.file);
        formData.append("email", this.email);
        formData.append("name", this.name);
        formData.append("description", this.description);
        await AuthenticationService.update(formData).then((response) => {
          this.$q.notify({
            type: "positive",
            timeout: 2000,
            position: "center",
            message: "success",
          });
          this.getPosts();
        });
      } catch (error) {
        this.$q.notify({
          type: "negative",
          multiLine: true,
          timeout: 2000,
          position: "center",
          message: error.response.data.error,
        });
        console.log(error.response.data);
      }
    },
    async updatePass() {
      try {
        const response = await AuthenticationService.updatepass({
          currentPassword: this.formData.currentPassword,
          newPassword: this.formData.newPassword,
        });
        this.$q.notify({
          type: "positive",
          timeout: 1000,
          position: "center",
          message: "success",
        });
      } catch (error) {
        this.$q.notify({
          type: "negative",
          timeout: 1000,
          position: "center",
          message: error.response.data.error,
        });
      }
    },
    async getPosts() {
      try {
        await AuthenticationService.user().then((response) => {
          this.file = response.data.user.avatar;
          this.name = response.data.user.name;
          this.email = response.data.user.email;
          this.description = response.data.user.description;
          console.log("this is respons", response.data.user);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
.card-bg {
  background-color: #162b4d;
}
</style>
