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
              v-model="post.title"
              :rules="[(val) => !!val || 'Field is required']"
              label="Category Title"
              stack-label
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <q-btn
              label="post"
              type="submit"
              @click.prevent="addTask"
              class="full-width"
              color="primary"
            />
          </div>
        </div>
      </q-form>
    </div>

    <q-card class="q-my-md">
      <q-card-section>
        <div class="text-h6 text-grey-8">
          Users
          <q-btn
            label="Export"
            class="float-right text-capitalize text-indigo-8 shadow-3"
            icon="person"
          />
        </div>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <q-table :rows="data" :columns="columns" hide-bottom>
          <template v-slot:body-cell-Name="props">
            <q-td :props="props">
              <q-item style="max-width: 420px">
                <!-- <q-item-section avatar>
                <q-avatar>
                  <img :src="props.row.avatar.url" />
                </q-avatar>
              </q-item-section> -->

                <q-item-section>
                  <q-item-label>{{ props.row.userId.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-Action="props">
            <q-td :props="props">
              <q-btn icon="edit" size="sm" flat dense />
              <q-btn
                icon="delete"
                @click="onDelete(props.row._id)"
                size="sm"
                class="q-ml-sm"
                flat
                dense
              />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <!-- <div
      class="text q-my-xl"
      v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '70%' }"
    >
      <div class="row q-col-gutter-lg">
        <div
          class="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-xl-2"
          v-for="item in items"
          :key="item"
        >
          <q-card-section class="bg-primary text-white">
            <div class="text-caption">{{ item.title }}</div>
          </q-card-section>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import categoriesService from "../services/categoriesService";
const data = [];
const columns = [
  {
    name: "Title",
    label: "Title",
    field: "title",
    sortable: true,
    align: "left",
  },
  {
    name: "Name",
    label: "Author",
    field: "name",
    sortable: true,
    align: "left",
  },
  {
    name: "Crated Date",
    label: "Crated Date",
    field: "createdAt",
    sortable: true,
    align: "left",
  },

  {
    name: "Action",
    label: "",
    field: "Action",
    sortable: false,
    align: "center",
  },
];
export default {
  data() {
    return {
      post: {},
      data,
      columns,
    };
  },
  methods: {
    async getPosts() {
      try {
        await categoriesService.cate().then((response) => {
          this.data = response.data.data;
          console.log("this is ", response.data);
        });
      } catch (err) {
        console.log(err.response);
      }
    },
    async onDelete(id) {
      try {
        await categoriesService.deleteCat(id).then((response) => {
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            position: "center",
            message: "success",
          });
          this.getPosts();
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
    async addTask() {
      try {
        await categoriesService.categories(this.post).then((response) => {
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            position: "center",
            message: "success",
          });

          this.getPosts();
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
  },
  async mounted() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped></style>
