import Api from "../services/Api";

export default {
  register(credentials) {
    return Api().post("auth/register", credentials);
  },
  login(credentials) {
    return Api().post("auth/login", credentials);
  },
  update(credentials) {
    return Api().put("auth/updatedetails", credentials);
  },

  user() {
    return Api().get("auth/me");
  },

  users() {
    return Api().get("users");
  },
  updatepass() {
    return Api().put("auth/updatepassword");
  },
  delete(userId) {
    return Api().delete(`auth/admin/user/${userId}`);
  },
  delete(userId) {
    return Api().delete(`users/${userId}`);
  },
};
