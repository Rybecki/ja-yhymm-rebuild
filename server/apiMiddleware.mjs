import { sendFormEmail } from './mail.mjs';
import { verifyTokenWithGoogle } from './recaptchaVerify.mjs';

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  return JSON.parse(raw);
}

function jsonResponse(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

export function createApiMiddleware(options = {}) {
  const { recaptchaSecret = '', disableRecaptcha = false } = options;

  return async (req, res, next) => {
    if (req.url?.startsWith('/api/recaptcha/verify') && req.method === 'POST') {
      if (!recaptchaSecret) {
        jsonResponse(res, 500, { success: false, error: 'Brak RECAPTCHA_SECRET_KEY.' });
        return;
      }
      try {
        const { token } = await readJsonBody(req);
        if (!token) {
          jsonResponse(res, 400, { success: false, error: 'Brak tokenu reCAPTCHA.' });
          return;
        }
        const result = await verifyTokenWithGoogle(recaptchaSecret, token);
        jsonResponse(res, result.success ? 200 : 400, result);
      } catch {
        jsonResponse(res, 500, { success: false, error: 'Błąd weryfikacji reCAPTCHA.' });
      }
      return;
    }

    if (req.url?.startsWith('/api/forms/send') && req.method === 'POST') {
      try {
        const body = await readJsonBody(req);
        const { subject, text, replyTo, recaptchaToken } = body;

        if (!subject || !text) {
          jsonResponse(res, 400, { success: false, error: 'Brak tematu lub treści wiadomości.' });
          return;
        }

        if (!disableRecaptcha && recaptchaSecret) {
          if (!recaptchaToken) {
            jsonResponse(res, 400, { success: false, error: 'Brak weryfikacji reCAPTCHA.' });
            return;
          }
          const captcha = await verifyTokenWithGoogle(recaptchaSecret, recaptchaToken);
          if (!captcha.success) {
            jsonResponse(res, 400, { success: false, error: captcha.error ?? 'Weryfikacja reCAPTCHA nie powiodła się.' });
            return;
          }
        }

        const sent = await sendFormEmail({ subject, text, replyTo });
        jsonResponse(res, 200, { success: true, to: sent.to });
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Nie udało się wysłać wiadomości.';
        jsonResponse(res, 500, { success: false, error: message });
      }
      return;
    }

    next();
  };
}
