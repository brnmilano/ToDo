import addImg from '../../assets/add.svg';
import Box from '@mui/material/Box';
import styles from './styles.module.scss';
import { Input } from '../Input';
import { TasksContext } from '../../transactions';
import { useContext, useEffect, useState } from 'react';
import { localstorage_tasks_data_key } from '../../variables';

type errorsMessageProps = {
  field: string,
  message: string,
}

export function AddNewTask() {
  const { createNewTask } = useContext(TasksContext)
  const [inputErrors, setInputErrors] = useState<errorsMessageProps[]>([]);

  const [addTask, setAddTask] = useState<string>('')

  async function handleCreateNewTask() {
    await createNewTask({
      addTask,
      isCompleted: false,
    })

    localStorage.setItem(localstorage_tasks_data_key, addTask);
    setAddTask(addTask);

    setAddTask('')
  }

  const getDataFromLocalStorage = (): void => {
    const storedData = localStorage.getItem(addTask);
    if (storedData) {
      setAddTask(storedData);
    }
  };

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);


  const handleValidateInput = () => {
    setInputErrors([]);

    const currentErrors: errorsMessageProps[] = [];

    if (!addTask) {
      currentErrors.push({ field: "addTask", message: "Campo obrigatário*" });
    }

    if (currentErrors.length > 0) {
      return setInputErrors(currentErrors);
    }

    handleCreateNewTask();
  }

  return (
    <Box className={styles.addNewTaskContainer}>
      <Input
        label=''
        onChange={(e) => { setAddTask(e.target.value) }}
        value={addTask}
        placeholder='Adicione uma nova tarefa'
        type="text"
        error={
          inputErrors.findIndex((item) => item.field === "addTask") !==
          -1
        }
        errorMessage={
          inputErrors.find((item) => item.field === "addTask")
            ?.message || ""
        }
      />

      <button onClick={handleValidateInput}>
        Criar

        <img src={addImg} alt="Criar" />
      </button>
    </Box>
  )
}