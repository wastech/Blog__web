<template>
  <div class="q-my-sm flex flex-center">
    <q-form
      @submit.prevent="onUpdate"
      v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '70%' }"
    >
      <div class="row q-col-gutter-sm">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-my-xs">
          <q-input
            filled
            v-model="title"
            :rules="[(val) => !!val || 'Field is required']"
            label="Title"
            stack-label
          />
        </div>

        <div>
          <div class="col-12 q-my-md">
            <input dark outlined type="file" ref="file" @change="onSelect()" />
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            {{ options._id }}
            <q-select
              filled
              v-model="categoryId"
              :rules="[(val) => !!val || 'Field is required']"
              :options="options"
              emit-value
              map-options
              option-value="_id"
              option-label="title"
              label="select category"
            />
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <q-select
              filled
              v-model="tags"
              :options="optionsT"
              multiple
              :rules="[(val) => !!val || 'Field is required']"
              use-chips
              label="Tags"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <q-editor
              v-model="description"
              :rules="[(val) => !!val || 'Field is required']"
              :dense="$q.screen.lt.md"
              :toolbar="[
                [
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    list: 'only-icons',
                    options: ['left', 'center', 'right', 'justify'],
                  },
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    options: ['left', 'center', 'right', 'justify'],
                  },
                ],
                [
                  'bold',
                  'italic',
                  'strike',
                  'underline',
                  'subscript',
                  'superscript',
                ],
                ['token', 'hr', 'link', 'custom_btn'],
                ['print', 'fullscreen'],
                [
                  {
                    label: $q.lang.editor.formatting,
                    icon: $q.iconSet.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                  },
                  {
                    label: $q.lang.editor.fontSize,
                    icon: $q.iconSet.editor.fontSize,
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'size-1',
                      'size-2',
                      'size-3',
                      'size-4',
                      'size-5',
                      'size-6',
                      'size-7',
                    ],
                  },
                  {
                    label: $q.lang.editor.defaultFont,
                    icon: $q.iconSet.editor.font,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'default_font',
                      'arial',
                      'arial_black',
                      'comic_sans',
                      'courier_new',
                      'impact',
                      'lucida_grande',
                      'times_new_roman',
                      'verdana',
                    ],
                  },
                  'removeFormat',
                ],
                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                ['undo', 'redo'],
                ['viewsource'],
              ]"
              :fonts="{
                arial: 'Arial',
                arial_black: 'Arial Black',
                comic_sans: 'Comic Sans MS',
                courier_new: 'Courier New',
                impact: 'Impact',
                lucida_grande: 'Lucida Grande',
                times_new_roman: 'Times New Roman',
                verdana: 'Verdana',
              }"
            />
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-my-sm"
          >
            <q-btn
              label="post"
              type="submit"
              class="full-width"
              color="primary"
            />
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import categoriesService from "../services/categoriesService";
import postService from "../services/postService";
export default {
  data() {
    return {
      title: "",
      description: "",
      tags: ["People"],
      categoryId: "",
      options: [],
      file: "",
      id: this.$route.params.id,
      optionsT: ["People", "Design", "photograph", "Girl", "Work", "city"],
    };
  },
  methods: {
     async getPosts() {
      try {
        await categoriesService.cate().then((response) => {
          this.options = response.data.data;
          console.log("this is ", response.data);
        });
      } catch (err) {
        console.log(err.response);
      }
    },
    async getPost() {
      try {
        await postService.showpost(this.id).then((response) => {
          this.title = response.data.post.title;
          this.description = response.data.post.description;
          this.categoryId = response.data.post.categoryId.title;
          console.log(response.post);
        });
      } catch (err) {
        console.log(err);
      }
    },
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    async onUpdate() {
      try {
        let formData = new FormData();
        formData.append("imageUrl", this.file);
        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("categoryId", this.categoryId);
        formData.append("tags", this.tags);
        await postService.updateData(this.id, formData).then((response) => {
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            position: "center",
            message: "Model Succesfully Created",
          });
        });
      } catch (error) {
        this.$q.notify({
          type: "negative",
          timeout: 1000,
          position: "center",
          message: "all fields are required",
        });
      }
    },
  },
  async mounted() {
    this.getPost();
    this.getPosts()
  },
};
</script>

<style lang="scss" scoped></style>
