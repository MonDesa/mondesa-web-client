import { Box, Container, Typography, Divider } from '@mui/material';
import { PageHelmet } from '../components/PageHelmet';
import TeamMemberCard from '../components/TeamMemberCard';
import { getTeamMembers, getTranslation } from '../constants/translations';
import { UseTranslation, UseLanguage } from '../contexts/LanguageContext';

const Team = () => {
  const { t } = UseTranslation();
  const { language } = UseLanguage();
  const teamMembers = getTeamMembers(language, getTranslation);

  return (
    <>
      <PageHelmet routeKey="TEAM" />
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
              {t('team.title')}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, mx: 'auto', maxWidth: 800 }}>
              {t('team.subtitle')}
            </Typography>
            <Divider sx={{ width: '80px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Team;