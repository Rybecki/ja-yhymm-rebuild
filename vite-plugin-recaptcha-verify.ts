import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';
import { verifyTokenWithGoogle } from './src/lib/recaptchaServerVerify.ts';

type VerifyOptions = {
  secretKey: string;
};

async function readJsonBody(req: IncomingMessage): Promise<{ token?: string }> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  return JSON.parse(raw) as { token?: string };
}

function createHandler(secretKey: string) {
  return async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    if (!req.url?.startsWith('/api/recaptcha/verify')) {
      next();
      return;
    }

    if (req.method !== 'POST') {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
      return;
    }

    if (!secretKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, error: 'Brak RECAPTCHA_SECRET_KEY na serwerze.' }));
      return;
    }

    try {
      const { token } = await readJsonBody(req);
      if (!token) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: false, error: 'Brak tokenu reCAPTCHA.' }));
        return;
      }

      const result = await verifyTokenWithGoogle(secretKey, token);
      res.statusCode = result.success ? 200 : 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result));
    } catch {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, error: 'Błąd weryfikacji reCAPTCHA.' }));
    }
  };
}

export function recaptchaVerifyPlugin(options: VerifyOptions): Plugin {
  const handler = createHandler(options.secretKey);

  const attach = (server: { middlewares: { use: (fn: typeof handler) => void } }) => {
    server.middlewares.use(handler);
  };

  return {
    name: 'recaptcha-verify',
    configureServer: attach,
    configurePreviewServer: attach,
  };
}
