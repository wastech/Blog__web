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
  showpost(postId) {
    return Api().get(`posts/${postId}`);
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
