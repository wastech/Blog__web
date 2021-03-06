import Api from "./Api";

export default {
  // addcomment(postId, comment) {
  //   return Api().post(`posts/${postId}/comments`, comment);
  // },
  // getcomment(postId) {
  //   return Api().get(`posts/${postId}/comments`);
  // },
  // allpost() {
  //   return Api().get("allpost");
  // },
  getPosts() {
    return Api().get("posts");
  },
  // getUserPosts() {
  //   return Api().get("posts/userpost");
  // },
  showpost(postId) {
    return Api().get(`posts/${postId}`);
  },
  sigleUserPosts(userId) {
    return Api().get(`posts/userpost/${userId}`);
  },
  getCategories(categoryId) {
    return Api().get(`posts/category/${categoryId}`);
  },
  getRelated(relatedId) {
    return Api().get(`posts/related/${relatedId}`);
  },

  getTags(tagsId) {
    return Api().get(`posts/tags/${tagsId}`);
  },

  // deleteData(ID) {
  //   return Api().delete(`posts/${ID}`);
  // },
  // like(data, userId) {
  //   return Api().put(`${data}/like`, {
  //     userId,
  //   });
  // },
};
