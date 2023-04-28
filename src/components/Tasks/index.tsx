import { Box } from '@mui/material';
import styles from './styles.module.scss'

export function Tasks() {
  return (
    <Box className={styles.tasksContainer}>
      <Box className={styles.tasksHeader}>
        <p>Tarefas criadas</p>

        <p>Concluídas</p>
      </Box>
    </Box>
  );
}