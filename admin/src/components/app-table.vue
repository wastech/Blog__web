<template>
  <q-card class="q-my-md">
    <q-card-section>
      <div class="text-h6 text-grey-8">
        Latest
        <q-btn
          label="Export"
          class="float-right text-capitalize text-indigo-8 shadow-3"
          icon="person"
        />
      </div>
    </q-card-section>
    <q-markup-table dark>
      <thead>
        <tr>
          <th class="text-center">Index</th>
          <th class="text-left">Image</th>
          <th class="text-left">Title</th>
           <th class="text-left">Author</th>
             <th class="text-left">category</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="text-center">{{ index }}</td>
          <td class="text-center">
            <div class="avatar text-left">
              <q-avatar rounded class="" size="60px">
                <img :src="item.imageUrl" />
              </q-avatar>
            </div>
          </td>
          <td class="text-left">
            {{ item.title }}
          </td>
           <td class="text-left" v-if="item.userId">
            {{ item.userId.name }}
          </td>
          <td class="text-left" v-if="item.categoryId">
            {{ item.categoryId.title }}
          </td>

          <td class="text-left">
            <router-link
              v-bind:to="{
                name: 'editpost',
                params: { id: item._id },
              }"
            >
              <q-icon name="edit" flat color="primary" size="sm" />
            </router-link>
            <!-- <router-link
              v-bind:to="{
                name: 'showindex',
                params: { id: item._id },
              }"
            > -->
              <q-icon name="visibility" color="green" size="sm" />
            <!-- </router-link> -->
            <q-icon
              name="delete"
              color="red"
              @click="onDelete(item._id)"
              size="sm"
            />
          </td>
          <!-- @click="onDelete(item._id)" -->
        </tr>
      </tbody>
    </q-markup-table>
  </q-card>
</template>

<script>
import postService from "../services/postService";
export default {
  name: "TableActions",
  data() {
    return {
      items: [],
    };
  },

  methods: {
    async getPosts() {
      try {
        await postService.getPosts().then((response) => {
          this.items = response.data.data;
          console.log("this is ", this.items);
        });
      } catch (err) {
        console.log(err.response);
      }
    },
    async onDelete(id) {
      try {
        await postService.deleteData(id).then((response) => {
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

<style scoped></style>
