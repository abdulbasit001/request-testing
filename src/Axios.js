import axios from "axios";
const reqOptions = {
  mode: "cors",
  headers: { "Access-Control-Allow-Origin": "*" },
};

export const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/",
  timeout: 6000,
  reqOptions,
});
