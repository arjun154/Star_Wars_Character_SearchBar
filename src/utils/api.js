import Axios from "axios";

// Base URL is defined which can be used anywhere in the app
const api = Axios.create({
  baseURL: "https://swapi.dev/api/people",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
