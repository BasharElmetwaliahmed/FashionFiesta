import axios from "axios";

export const fetchData = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});