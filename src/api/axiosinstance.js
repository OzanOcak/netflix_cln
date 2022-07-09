import axios from "axios"; // yarn add axios

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
//instance.defaults.headers.common["Authorization"] = "Auth from instance";

export default instance;
