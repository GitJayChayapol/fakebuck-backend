import axios from "axios";
import { BACKEND_ULR } from "./env";
import { getAccessToken } from "../utils/local-storane";

axios.defaults.baseURL = BACKEND_ULR;

axios.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
