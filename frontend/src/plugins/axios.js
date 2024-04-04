import axios from "axios";

//config de axios 
axios.defaults.baseURL = "http://127.0.0.1:8000";

const custom_axios = axios;

export default custom_axios;