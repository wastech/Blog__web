<template>
  <div class="q-my-sm flex flex-center">
    <q-form
      v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '70%' }"
    >
      <div class="row q-col-gutter-sm">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-my-xs">
          <q-input
            filled
            v-model="text"
            :rules="[(val) => !!val || 'Field is required']"
            label="Title"
            stack-label
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <q-file
            filled
            v-model="model"
            :rules="[(val) => !!val || 'Field is required']"
          >
            <template v-slot:prepend>
              <q-icon name="fas fa-paperclip" />
            </template>
          </q-file>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-select
            filled
            v-model="model"
            :rules="[(val) => !!val || 'Field is required']"
            :options="options"
            label="select category"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-select
            filled
            v-model="modelMultiple"
            multiple
            :rules="[(val) => !!val || 'Field is required']"
            :options="options"
            use-chips
            stack-label
            label="Tags"
          />
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <q-editor
            v-model="qeditor"
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
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-my-sm">
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
</template>

<script>
export default {
  data() {
    return {
      qeditor:
        "<pre>Check out the two different types of dropdowns" +
        ' in each of the "Align" buttons.</pre> ',
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      modelMultiple: ["Facebook"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
