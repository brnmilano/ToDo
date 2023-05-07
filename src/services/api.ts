import axios from "axios";

export const api = axios.create({
  baseURL: "https://todo-lista-de-tarefas.netlify.app/api",
});
