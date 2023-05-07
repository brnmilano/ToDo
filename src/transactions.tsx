import { createContext, useEffect, useState, ReactNode, Dispatch } from "react";
import { api } from "./services/api";

export interface TasksProps {
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
    api.get('/')
      .then(response => setTasks(response.data));
  }, [])

  async function createNewTask(taskInput: TasksInput) {
    await api.post('/', taskInput)
    const tasksResponse = await api.get('/')

    setTasks(tasksResponse.data);
  }

  return (
    <TasksContext.Provider value={{ tasks, createNewTask, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}