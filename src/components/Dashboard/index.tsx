import { AddNewTask } from "../AddNewTask";
import Box from '@mui/material/Box';
import styles from './styles.module.scss';
import { Tasks } from "../Tasks";

export function Dashboard() {
  return (
    <Box className={styles.dashboardContainer}>
      <AddNewTask />

      <Tasks />
    </Box>
  );
}