import axios from "axios";

export const api = axios.create({
  baseURL: "https://to-do-git-master-brnmilano.vercel.app/api",
});
