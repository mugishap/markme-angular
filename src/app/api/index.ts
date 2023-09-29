import axios from "axios";

const api = () => axios.create({
  baseURL: "http://localhost:8088/api/v1",
  headers: {
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
});

export default api;