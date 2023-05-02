import axios from "axios";

export const api = axios.create({
  baseURL: "https://to-do-orcin-nu.vercel.app/api",
});
