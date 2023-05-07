import { RouteProps } from "react-router-dom";
import { ToDo } from "../screens/ToDo";
import { todo_path } from "./models";

export const routes: RouteProps[] = [
  {
    path: todo_path,
    element: <ToDo />
  },
]