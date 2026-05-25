import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { sendFormEmail } from './mail.mjs';
import { verifyTokenWithGoogle } from './recaptchaVerify.mjs';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const port = Number(process.env.PORT) || 3000;
const secretKey = process.env.RECAPTCHA_SECRET_KEY ?? '';
const disableRecaptcha =
  process.env.DISABLE_RECAPTCHA === 'true' || process.env.VITE_DISABLE_RECAPTCHA === 'true';

const app = express();
app.use(express.json());

app.post('/api/recaptcha/verify', async (req, res) => {
  if (!secretKey) {
    res.status(500).json({ success: false, error: 'Brak RECAPTCHA_SECRET_KEY.' });
    return;
  }
  const token = req.body?.token;
  if (!token) {
    res.status(400).json({ success: false, error: 'Brak tokenu reCAPTCHA.' });
    return;
  }
  try {
    const result = await verifyTokenWithGoogle(secretKey, token);
    res.status(result.success ? 200 : 400).json(result);
  } catch {
    res.status(500).json({ success: false, error: 'Błąd weryfikacji reCAPTCHA.' });
  }
});

app.post('/api/forms/send', async (req, res) => {
  try {
    const { subject, text, replyTo, recaptchaToken } = req.body ?? {};

    if (!subject || !text) {
      res.status(400).json({ success: false, error: 'Brak tematu lub treści wiadomości.' });
      return;
    }

    if (!disableRecaptcha && secretKey) {
      if (!recaptchaToken) {
        res.status(400).json({ success: false, error: 'Brak weryfikacji reCAPTCHA.' });
        return;
      }
      const captcha = await verifyTokenWithGoogle(secretKey, recaptchaToken);
      if (!captcha.success) {
        res.status(400).json({ success: false, error: captcha.error ?? 'Weryfikacja reCAPTCHA nie powiodła się.' });
        return;
      }
    }

    const sent = await sendFormEmail({ subject, text, replyTo });
    res.json({ success: true, to: sent.to });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Nie udało się wysłać wiadomości.';
    res.status(500).json({ success: false, error: message });
  }
});

app.use(express.static(distDir));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Serwer: http://localhost:${port}`);
  console.log(`Formularze → ${process.env.FORM_RECIPIENT || 'biuro@ja-yhymm.pl'}`);
});
