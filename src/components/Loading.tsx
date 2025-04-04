import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={containerHeight}
        gap={2}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <CircularProgress
            size={size}
            color="primary"
            thickness={4}
          />
        </motion.div>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontWeight: 300,
            letterSpacing: '0.5px'
          }}
        >
          {displayMessage}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Loading;
