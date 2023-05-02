import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface TasksProps {
  id: number,
  addTask: string,
}

interface TasksProviderProps {
  children: ReactNode;
}

type TasksInput = Pick<TasksProps, 'addTask'>

interface TasksContextData {
  tasks: TasksProps[];
  createNewTask: (task: TasksInput) => Promise<void>;
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  useEffect(() => {
    api.get('/lista-de-tarefas')
      .then(response => setTasks(response.data.tasks));
  }, [])

  async function createNewTask(taskInput: TasksInput) {
    const response = await api.post('/lista-de-tarefas', taskInput)

    const { task } = response.data

    setTasks([
      ...tasks,
      task
    ]);
  }

  return (
    <TasksContext.Provider value={{ tasks, createNewTask }}>
      {children}
    </TasksContext.Provider>
  );
}