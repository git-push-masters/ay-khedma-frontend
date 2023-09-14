import axios from "axios";
const axiosInstsnce = axios.create({
  baseURL: "http://localhost:4000/api",
  //   headers,
});
export default axiosInstsnce;
