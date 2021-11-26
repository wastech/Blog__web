import Api from "./Api";

export default {

  postComment(comment) {
    return Api().post("comments", comment);
  },
  getComments(postId) {
    return Api().get(`comments/${postId}/comments`);
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
