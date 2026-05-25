import { createApiMiddleware } from './server/apiMiddleware.mjs';

export function apiPlugin(options) {
  const handler = createApiMiddleware({
    recaptchaSecret: options.recaptchaSecretKey,
    disableRecaptcha: options.disableRecaptcha,
  });

  const attach = (server) => {
    server.middlewares.use(handler);
  };

  return {
    name: 'jayhymm-api',
    configureServer: attach,
    configurePreviewServer: attach,
  };
}
