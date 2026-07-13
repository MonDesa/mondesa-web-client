import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { ArrowRight, Mountain, Radio, Waves, Signal, Zap, Cpu, Brain } from '../utils/icons';
import ProjectCard from '../components/ProjectCard';
import { MONDESA_PATH, PROJECTS_PATH } from '../routes';
import { getDisplayProjects, getTranslation } from '../constants/translations';
import { UseTranslation, UseLanguage } from '../contexts/LanguageContext';

const gradientText = {
  background: 'linear-gradient(45deg, #A3C6D4, #B4C9A9)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
};

const Home = () => {
  const { t } = UseTranslation();
  const { language } = UseLanguage();

  const features = [
    { icon: <Zap size={28} />, color: '#A3C6D4', title: t('home.features.warning.title'), desc: t('home.features.warning.desc') },
    { icon: <Cpu size={28} />, color: '#B4C9A9', title: t('home.features.sensing.title'), desc: t('home.features.sensing.desc') },
    { icon: <Brain size={28} />, color: '#D9BBA0', title: t('home.features.predictive.title'), desc: t('home.features.predictive.desc') },
  ];

  const featured = getDisplayProjects(language, getTranslation).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          minHeight: { xs: 'auto', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.default',
          pt: { xs: 12, md: 8 },
          pb: { xs: 8, md: 0 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', top: 120, right: -10, opacity: 0.05, transform: 'rotate(-10deg)', zIndex: 0 }}>
          <Mountain size={300} />
        </Box>
        <Box sx={{ position: 'absolute', bottom: -20, left: -20, opacity: 0.05, transform: 'rotate(10deg)', zIndex: 0 }}>
          <Waves size={300} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 5, md: 8 },
            }}
          >
            <Box sx={{ flex: 1, width: '100%' }}>
              <Box
                component="img"
                src="/extended_logo.svg"
                alt="MonDesa"
                sx={{ width: '100%', maxWidth: { xs: 300, md: 400 }, mb: 3, display: 'block' }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  mb: 2,
                  lineHeight: 1.2,
                  ...gradientText,
                }}
              >
                {t('home.title')}
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                {t('home.subtitle')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowRight />}
                  component="a"
                  href={MONDESA_PATH}
                  sx={{ minWidth: { xs: '100%', sm: 'auto' }, mb: { xs: 1, sm: 0 } }}
                >
                  {t('home.cta.learn')}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component="a"
                  href={PROJECTS_PATH}
                  sx={{ minWidth: { xs: '100%', sm: 'auto' } }}
                >
                  {t('home.cta.explore')}
                </Button>
              </Box>
            </Box>

            {/* Hero visual — asymmetric icon columns, no box (hidden on mobile) */}
            <Box
              sx={{
                flex: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                gap: 4,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 8 }}>
                <Mountain size={64} color="#A3C6D4" />
                <Radio size={64} color="#B4C9A9" />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Waves size={64} color="#D9BBA0" />
                <Signal size={64} color="#A3C6D4" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* What we do */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' }, ...gradientText }}>
              {t('home.features.title')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mx: 'auto', maxWidth: 700, fontWeight: 400 }}>
              {t('home.features.subtitle')}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {features.map((f) => (
              <Grid item xs={12} md={4} key={f.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: f.color,
                        bgcolor: `${f.color}22`,
                        mb: 3,
                      }}
                    >
                      {f.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600 }}>
                      {f.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {f.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured projects */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' }, ...gradientText }}>
              {t('home.featured.title')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mx: 'auto', maxWidth: 700, fontWeight: 400 }}>
              {t('home.featured.subtitle')}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {featured.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 8 } }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowRight />}
              component="a"
              href={PROJECTS_PATH}
            >
              {t('home.featured.cta')}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
