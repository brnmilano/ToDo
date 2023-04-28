import Box from '@mui/material/Box';
import styles from './styles.module.scss';
import addImg from '../../assets/add.svg'

export function Summary() {
  return (
    <Box className={styles.summaryContainer}>
      <input placeholder='Adicione uma nova tarefa' type="text" />

      <button>
        Criar

        <img src={addImg} alt="Criar" />
      </button>
    </Box>
  )
}