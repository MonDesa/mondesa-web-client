import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactRouter(), react()],
  ssr: {
    noExternal: true,
  },
});
