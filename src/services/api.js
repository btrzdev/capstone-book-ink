import axios from "axios";

const api = axios.create({ baseURL: "https://server-capstone-book-ink.herokuapp.com/" });

export default api;