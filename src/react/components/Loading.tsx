import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { UseTranslation } from '../contexts/LanguageContext';

interface LoadingProps {
  message?: string;
  size?: number;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  message,
  size = 40,
  fullScreen = false
}) => {
  const { t } = UseTranslation();
  const defaultMessage = t('common.loading');
  const displayMessage = message || defaultMessage;
  const containerHeight = fullScreen ? '100vh' : '200px';

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={containerHeight}
      gap={2}
    >
      <CircularProgress size={size} color="primary" thickness={4} />
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ fontWeight: 300, letterSpacing: '0.5px' }}
      >
        {displayMessage}
      </Typography>
    </Box>
  );
};

export default Loading;
