import { Box, Button, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { ArrowRight, Mountain, Radio, Waves, Signal } from '../utils/icons';
import { Link } from 'react-router-dom';
import { PageHelmet } from '../components/PageHelmet';
import { MONDESA_PATH, PROJECTS_PATH } from '../routes';
import { UseTranslation } from '../contexts/LanguageContext';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = UseTranslation();

  return (
    <>
      <PageHelmet routeKey="HOME" />
      <Box>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'background.default',
            pt: 8,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 120,
              right: -10,
              opacity: 0.05,
              transform: 'rotate(-10deg)',
              zIndex: 0,
            }}
          >
            <Mountain size={300} />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: -20,
              left: -20,
              opacity: 0.05,
              transform: 'rotate(10deg)',
              zIndex: 0,
            }}
          >
            <Waves size={300} />
          </Box>

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { xs: 4, md: 8 },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box component="img" src="/extended_logo.svg" alt="MonDesa Extended Logo" sx={{
                  width: '100%',
                  maxWidth: 400,
                  mb: 3
                }} />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3.5rem' },
                    mb: 2,
                    background: 'linear-gradient(45deg, #A3C6D4, #B4C9A9)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    lineHeight: 1.2,
                  }}
                >
                  {t('home.title')}
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                  {t('home.subtitle')}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowRight />}
                    component={Link}
                    to={MONDESA_PATH}
                    sx={{
                      minWidth: { xs: '100%', sm: 'auto' },
                      mb: { xs: 1, sm: 0 }
                    }}
                  >
                    {t('home.cta.learn')}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    component={Link}
                    to={PROJECTS_PATH}
                    sx={{ minWidth: { xs: '100%', sm: 'auto' } }}
                  >
                    {t('home.cta.explore')}
                  </Button>
                </Box>
              </Box>
              {!isMobile && (
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
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
              )}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;