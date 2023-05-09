import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { TasksProvider } from "../../hooks/useTasks";

export function ToDo() {
  return (
    <TasksProvider>
      <Header />

      <Dashboard />
    </TasksProvider>
  )
}