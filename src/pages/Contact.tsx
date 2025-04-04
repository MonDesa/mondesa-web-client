import { Box, Container, Grid, Typography, TextField, Button, Paper, Divider, Alert, Snackbar } from '@mui/material';
import { Send } from '../utils/icons';
import { PageHelmet } from '../components/PageHelmet';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { UseTranslation } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = UseTranslation();
  const {
    formValues,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    clearStatus
  } = useFormSubmit();

  return (
    <>
      <PageHelmet routeKey="CONTACT" />
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
              {t('contact.title')}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, mx: 'auto', maxWidth: 600 }}>
              {t('contact.subtitle')}
            </Typography>
            <Divider sx={{ width: '80px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          <Grid container spacing={8} alignItems="top">
            <Grid item xs={12} md={5}>
              <Box sx={{ px: { md: 4 } }}>
                <Typography variant="h6" sx={{ color: 'text.primary', mb: 3, fontWeight: 600 }}>
                  {t('contact.info.title')}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, fontSize: '1rem', lineHeight: 1.6 }}>
                  {t('contact.info.collaboration')}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, fontSize: '1rem', lineHeight: 1.6 }}>
                  {t('contact.info.research')}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1rem', lineHeight: 1.6 }}>
                  {t('contact.info.partnership')}
                </Typography>
                <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 600, mr: 1 }}>
                    Email:
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    contact@mondesa.org
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={t('contact.form.name')}
                        name="name"
                        variant="outlined"
                        required
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.name.placeholder')}
                        InputProps={{ sx: { borderRadius: 2 } }}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={t('contact.form.email')}
                        name="email"
                        variant="outlined"
                        type="email"
                        required
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.email.placeholder')}
                        InputProps={{ sx: { borderRadius: 2 } }}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={t('contact.form.message')}
                        name="message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        value={formValues.message}
                        onChange={handleChange}
                        placeholder={t('contact.form.message.placeholder')}
                        InputProps={{ sx: { borderRadius: 2 } }}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          py: 1.5,
                          boxShadow: '0 4px 10px rgba(163, 198, 212, 0.4)',
                          borderRadius: 2
                        }}
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>

          <Snackbar
            open={submitStatus !== null}
            autoHideDuration={6000}
            onClose={clearStatus}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert
              onClose={clearStatus}
              severity={submitStatus?.success ? "success" : "error"}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {submitStatus?.message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </>
  );
};

export default Contact;