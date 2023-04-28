import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PortraitIcon from '@mui/icons-material/Portrait';
import styles from './styles.module.scss';
import { Box } from '@mui/material';
import { Button } from '../../components/Button';
import { todo_path } from '../../routes/models';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(todo_path)
  }

  return (
    <Box className={styles.container}>
      <p>Descrição</p>

      <Button onClick={() => handleRedirect()} size='medium'>Acessar to-do</Button>

      <Box className={styles.social}>
        <a
          className={styles.socialMedia}
          href="https://github.com/brnmilano"
          id="github-bruno-milano"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon style={{ color: "#ffffff", fontSize: 24 }} />
        </a>

        <a
          className={styles.socialMedia}
          href="https://www.linkedin.com/in/brunomilano/"
          id="linkedin-bruno-milano"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedInIcon style={{ color: "#ffffff", fontSize: 24 }} />
        </a>

        <a
          className={styles.socialMedia}
          href="mailto:brnmilano.dev@gmail.com"
          id="linkedin-bruno-milano"
          rel="noopener noreferrer"
          target="_blank"
        >
          <MailOutlineIcon style={{ color: "#ffffff", fontSize: 24 }} />
        </a>

        <a
          className={styles.socialMedia}
          href="https://drive.google.com/file/d/1uys_w06ER4eUZFzfZ52YemubGVsmzwpI/view?usp=sharing"
          id="currículo-bruno-milano"
          rel="noopener noreferrer"
          target="_blank"
        >
          <PortraitIcon style={{ color: "#ffffff", fontSize: 24 }} />
        </a>
      </Box>
    </Box>
  );
}