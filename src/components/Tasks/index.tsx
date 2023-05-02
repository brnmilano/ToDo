import styles from './styles.module.scss';
import trashIcon from '../../assets/trash.svg';
import { Box } from '@mui/material';
import { Checkbox } from '../Checkbox';
import { TasksContext } from '../../transactions';
import { useContext } from 'react';

export function Tasks() {
  const { tasks } = useContext(TasksContext)

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

              <p>{task?.addTask}</p>

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