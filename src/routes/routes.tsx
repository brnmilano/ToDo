import { RouteProps } from "react-router-dom";
import { Home } from "../screens/Home";
import { ToDo } from "../screens/ToDo";
import { todo_path } from "./models";

export const routes: RouteProps[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: todo_path,
    element: <ToDo />
  },
]