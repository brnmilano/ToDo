import axios from "axios";

export const api = axios.create({
  baseURL: "https://to-dc4e2w83u-brnmilano.vercel.app/lista-de-tarefas/api",
});
