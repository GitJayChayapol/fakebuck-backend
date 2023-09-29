import axios from "axios";
import { BACKEND_ULR } from "./env";

axios.defaults.baseURL = BACKEND_ULR;

export default axios;
