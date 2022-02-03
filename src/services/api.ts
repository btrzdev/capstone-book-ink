import axios from "axios";

export const api = axios.create({
  // baseURL: "https://server-capstone-book-ink.herokuapp.com/",
  baseURL: "http://localhost:3001/",
});
