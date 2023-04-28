import logoImg from '../../assets/logo.svg'
import Box from '@mui/material/Box';
import styles from './styles.module.scss';

export function Header() {
  return (
    <Box className={styles.headerContainer}>
      <img src={logoImg} alt="Logo to-do" />
    </Box>
  );
}