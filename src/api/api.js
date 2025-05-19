import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
