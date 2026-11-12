import { Box, Container, Link, Typography } from '@mui/material';
import { UseTranslation } from '../contexts/LanguageContext';

const SECTIONS = ['who', 'form', 'analytics', 'storage', 'processors', 'rights'] as const;

const Privacy = () => {
    const { t } = UseTranslation();

    return (
        <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.default' }}>
            <Container maxWidth="md">
                <Typography variant="overline" color="text.secondary">
                    {t('privacy.updated')}
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, fontWeight: 600, mt: 1, mb: 3 }}>
                    {t('privacy.title')}
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 6 }}>
                    {t('privacy.lead')}
                </Typography>
                {SECTIONS.map((s) => (
                    <Box key={s} component="section" sx={{ mb: 5 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>
                            {t(`privacy.${s}.title`)}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                            {t(`privacy.${s}.text`)}
                        </Typography>
                    </Box>
                ))}
                <Link component="button" type="button" data-consent-open variant="body1" sx={{ fontWeight: 600 }}>
                    {t('privacy.cookies')}
                </Link>
            </Container>
        </Box>
    );
};

export default Privacy;
