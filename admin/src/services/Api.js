import axios from "axios";
import store from "../store/index";

export default () => {
  return axios.create({
    baseURL: `https://wasblog.onrender.com/api/v1/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`,
    },
  });
};
