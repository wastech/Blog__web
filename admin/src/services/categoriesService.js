import Api from "../services/Api";
export default {
  cate() {
    return Api().get("categories");
  },

  deleteCat(categoryId) {
    return Api().delete(`categories/${categoryId}`);
  },
  // show(songId) {
  //   return Api().get(`songs/${songId}`);
  // },

  categories(post) {
    return Api().post("categories", post);
  },
};
