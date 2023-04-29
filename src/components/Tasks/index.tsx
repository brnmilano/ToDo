import { Box } from '@mui/material';
import styles from './styles.module.scss'
import { Checkbox } from '../Checkbox';
import trashIcon from '../../assets/trash.svg';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface TasksProps {
  id: number,
  description: string,
}

export function Tasks() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  useEffect(() => {
    api.get('/lista-de-tarefas')
      .then(response => setTasks(response.data.tasks));
  }, [])

  console.log(tasks);


  return (
    <Box className={styles.tasksContainer}>
      <Box className={styles.tasksHeader}>
        <Box className={styles.tasksCreated}>
          <span>
            Tarefas criadas

            <p>5</p>
          </span>
        </Box>

        <Box className={styles.tasksCompleted}>
          <span>
            Concluídas

            <p>0 de 5</p>
          </span>
        </Box>
      </Box>

      <Box>
        <Box className={styles.tasksList}>
          {tasks.map(task => (
            <Box key={task.id} className={styles.tasks}>
              <Checkbox />

              <p>{task.description}</p>

              <button>
                <img src={trashIcon} alt="Apagar tarefa" />
              </button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}