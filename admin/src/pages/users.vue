<template>
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
              <q-item-section avatar>
                <q-avatar>
                  <img :src="props.row.avatar.url" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ props.row.name }}</q-item-label>
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
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
const data = [];
const columns = [
  { name: "Name", label: "Name", field: "name", sortable: true, align: "left" },
  {
    name: "Crated Date",
    label: "Crated Date",
    field: "createdAt",
    sortable: true,
    align: "left",
  },
  {
    name: "Role",
    label: "Role",
    field: "role",
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
  name: "TableActions",
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    async onDelete(id) {
      try {
        await AuthenticationService.delete(id).then((response) => {
          this.getPosts();
        });
      } catch (error) {}
    },
    async getPosts() {
      try {
        await AuthenticationService.users().then((response) => {
          this.data = response.data.data;
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            position: "center",
            message: "success",
          });
        });
      } catch (err) {
        this.$q.notify({
          type: "negative",
          timeout: 1000,
          position: "center",
          message: err.response.data.error,
        });
      }
    },
  },
  async mounted() {
    this.getPosts();
  },
};
</script>

<style scoped></style>
