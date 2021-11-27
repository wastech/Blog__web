import Api from "./Api";

export default {
  createReply(data) {
    return Api().post("replies", data);
  },

  getReply() {
    return Api().get(`${commentId}/replies`);
  },
  deleteById(id) {
    return Api().delete(`replies/${id}`);
  },
};
