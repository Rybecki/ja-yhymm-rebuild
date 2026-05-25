import nodemailer from 'nodemailer';
import { formatFormTextAsHtml } from './formEmailHtml.mjs';

const FORM_RECIPIENT_DEFAULT = 'biuro@ja-yhymm.pl';

export function getFormRecipient() {
  const configured = process.env.FORM_RECIPIENT?.trim();
  return configured || FORM_RECIPIENT_DEFAULT;
}

export function createMailTransport() {
  const host = process.env.SMTP_HOST || 's142.cyber-folks.pl';
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== 'false' && port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error('Brak SMTP_USER lub SMTP_PASS w konfiguracji (.env).');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: secure ? undefined : { rejectUnauthorized: false },
  });
}

export async function sendFormEmail(payload) {
  const transport = createMailTransport();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const to = getFormRecipient();
  const text = payload.text;
  const html = payload.html ?? formatFormTextAsHtml(text);

  await transport.sendMail({
    from: `"JA YHYMM — formularz" <${from}>`,
    to,
    replyTo: payload.replyTo || from,
    subject: payload.subject,
    text,
    html,
  });

  return { to };
}
