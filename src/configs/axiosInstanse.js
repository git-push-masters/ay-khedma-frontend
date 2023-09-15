import axios from "axios";

const config = {
  baseURL: "http://localhost:4000/api/",
};

const axiosInstsnce = axios.create(config);

axiosInstsnce.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) request.headers["Authorization"] = `Bearer ${token}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstsnce;
