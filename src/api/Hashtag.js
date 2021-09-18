import axios from "axios";

export const BASE_URL = "http://localhost:4040/api";
export const BASE_SOCKET_URL = "http://localhost:4040";

axios.defaults.baseURL = BASE_URL;

export const fetchAll = () => axios.get("/hashtag");

export const fetchId = id => axios.get(`/hashtag/${id}`);

export const create = data => axios.post("/hashtag", data);
