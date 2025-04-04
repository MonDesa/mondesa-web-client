import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import { PageHelmet } from '../components/PageHelmet';
import ProjectCard from '../components/ProjectCard';
import { getDisplayProjects, getTranslation } from '../constants/translations';
import { UseTranslation, UseLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = UseTranslation();
  const { language } = UseLanguage();
  const displayProjects = getDisplayProjects(language, getTranslation);

  return (
    <>
      <PageHelmet routeKey="PROJECTS" />
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #A3C6D4, #B4C9A9)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {t('projects.title')}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, mx: 'auto', maxWidth: 800 }}>
              {t('projects.subtitle')}
            </Typography>
            <Divider sx={{ width: '80px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          <Grid container spacing={4}>
            {displayProjects.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Projects;