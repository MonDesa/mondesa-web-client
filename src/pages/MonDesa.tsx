import { Box, Container, Grid, Typography, Divider, Paper } from '@mui/material';
import { Mountain, Radio, Wifi, Zap, Users } from '../utils/icons';
import { PageHelmet } from '../components/PageHelmet';
import { UseTranslation } from '../contexts/LanguageContext';

const MonDesa = () => {
  const { t } = UseTranslation();

  const features = [
    {
      icon: <Zap size={32} color="#A3C6D4" />,
      titleKey: 'mondesa.features.energy.title',
      descriptionKey: 'mondesa.features.energy.description',
    },
    {
      icon: <Radio size={32} color="#B4C9A9" />,
      titleKey: 'mondesa.features.mqtt.title',
      descriptionKey: 'mondesa.features.mqtt.description',
    },
    {
      icon: <Wifi size={32} color="#D9BBA0" />,
      titleKey: 'mondesa.features.wireless.title',
      descriptionKey: 'mondesa.features.wireless.description',
    },
    {
      icon: <Mountain size={32} color="#A3C6D4" />,
      titleKey: 'mondesa.features.prevention.title',
      descriptionKey: 'mondesa.features.prevention.description',
    },
  ];
  return (
    <>
      <PageHelmet routeKey="MONDESA" />
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box component="img" src="/extended_logo.svg" alt="MonDesa Logo" sx={{
              height: 80,
              mb: 4,
              display: 'inline-block'
            }} />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #A3C6D4, #B4C9A9)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {t('mondesa.title')}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, mx: 'auto', maxWidth: 800 }}>
              {t('mondesa.subtitle')}
            </Typography>
            <Divider sx={{ width: '80px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={3} key={feature.titleKey}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <Box sx={{ p: 4 }}>
                    <Box sx={{
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: 'background.default',
                      mx: 'auto'
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, textAlign: 'center' }}>
                      {t(feature.titleKey)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                      {t(feature.descriptionKey)}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 12 }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={8}>
                <Typography variant="h3" sx={{ mb: 4 }}>{t('mondesa.mission.title')}</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 800, mb: 4 }}>
                  {t('mondesa.mission.description1')}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 800 }}>
                  {t('mondesa.mission.description2')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                  }}
                >
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                  }}>
                    <Users size={24} color="#9FC1E0" />
                    <Typography variant="h5" sx={{ ml: 2, fontWeight: 500 }}>
                      {t('mondesa.team.title')}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    {t('mondesa.team.description')}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0, color: 'text.secondary' }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body2">{t('mondesa.team.skill1')}</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body2">{t('mondesa.team.skill2')}</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body2">{t('mondesa.team.skill3')}</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 0 }}>
                      <Typography variant="body2">{t('mondesa.team.skill4')}</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MonDesa;