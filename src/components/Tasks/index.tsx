import styles from './styles.module.scss';
import trashIcon from '../../assets/trash.svg';
import { api } from '../../services/api';
import { Box } from '@mui/material';
import { TasksContext } from '../../transactions';
import { useContext } from 'react';
import clsx from 'clsx';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export function Tasks() {
  const { tasks, setTasks } = useContext(TasksContext)

  // essa função vai atualizar a tarefa fazendo um filtro com o id da tarefa que foi clicada e depois vai atualizar a tarefa do array de tarefas.
  const handleUpdateTask = async (id: number) => {
    await api.patch(`/lista-de-tarefas/${id}`);
    setTasks(tasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  }

  // essa função vai deletar a tarefa fazendo um filtro com o id da tarefa que foi clicada e depois vai remover a tarefa do array de tarefas.
  const handleDeleteTask = async (id: number) => {
    await api.delete(`/lista-de-tarefas/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box className={styles.tasksContainer}>
      <Box className={styles.tasksHeader}>
        <Box className={styles.tasksCreated}>
          <span>
            Tarefas criadas

            <p>{tasks.length}</p>
          </span>
        </Box>

        <Box className={styles.tasksCompleted}>
          <span>
            Concluídas

            <p>{tasks.filter(task => task.isCompleted).length} de {tasks.length}</p>
          </span>
        </Box>
      </Box>

      {tasks.length === 0 ? (
        <Box className={styles.tasksEmpty}>
          <ReceiptLongIcon />

          <h1>
            Você ainda não tem tarefas cadastradas
          </h1>

          <p>
            Crie tarefas e organize seus itens a fazer
          </p>
        </Box>
      ) : (
        <Box>
          <Box className={styles.tasksList}>
            {tasks.map(task => (
              <Box key={task.id} className={styles.tasks}>
                <input
                  type='checkbox'
                  checked={task?.isCompleted}
                  onChange={() => handleUpdateTask(task.id)}
                  className={styles.checkboxInput}
                />

                <Box className={clsx(styles.tasksText, task.isCompleted && styles.active)}>
                  <p>{task?.addTask}</p>
                </Box>

                <Box className={styles.deleteTask}>
                  <button onClick={() => handleDeleteTask(task.id)}>
                    <img src={trashIcon} alt="Apagar tarefa" />
                  </button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}


    </Box>
  );
}