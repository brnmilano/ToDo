import addImg from '../../assets/add.svg';
import Box from '@mui/material/Box';
import styles from './styles.module.scss';
import { TasksContext } from '../../transactions';
import { useContext, useState } from 'react';

export function AddNewTask() {
  const { createNewTask } = useContext(TasksContext)

  const [addTask, setAddTask] = useState('')

  async function handleCreateNewTask() {
    await createNewTask({
      addTask,
    })

    setAddTask('')
  }

  return (
    <Box className={styles.summaryContainer}>
      <input
        onChange={(e) => { setAddTask(e.target.value) }}
        value={addTask}
        placeholder='Adicione uma nova tarefa'
        type="text"
      />

      <button onClick={handleCreateNewTask}>
        Criar

        <img src={addImg} alt="Criar" />
      </button>
    </Box>
  )
}