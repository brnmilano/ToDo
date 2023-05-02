import { createContext, useEffect, useState, ReactNode, Dispatch } from "react";
import { api } from "./services/api";

interface TasksProps {
  id: number,
  addTask: string,
  isCompleted: boolean,
}

interface TasksProviderProps {
  children: ReactNode;
}

type TasksInput = Pick<TasksProps, 'addTask' | 'isCompleted'>

interface TasksContextData {
  tasks: TasksProps[];
  setTasks: Dispatch<TasksProps[]>;
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
    <TasksContext.Provider value={{ tasks, createNewTask, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}