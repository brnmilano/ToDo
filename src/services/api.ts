import axios from "axios";

export const api = axios.create({
  baseURL: "https://effulgent-babka-2c2632.netlify.app/lista-de-tarefas/api",
});
