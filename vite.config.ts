import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import {apiPlugin} from './vite-plugin-api.mjs';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      apiPlugin({
        recaptchaSecretKey: env.RECAPTCHA_SECRET_KEY ?? '',
        disableRecaptcha: env.DISABLE_RECAPTCHA === 'true' || env.VITE_DISABLE_RECAPTCHA === 'true',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
