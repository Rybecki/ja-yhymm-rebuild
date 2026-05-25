import dotenv from 'dotenv';
import { sendFormEmail } from '../server/mail.mjs';

dotenv.config();

const text = [
  'Formularz: Kontakt (/kontakt)',
  '',
  'Imię i nazwisko: Jan Kowalski Testowy',
  'Email: jan.testowy@example.com',
  'Telefon: +48 600 100 200',
  'Wiadomość: Przykładowa wiadomość ze strony kontaktowej JA YHYMM.',
].join('\n');

const result = await sendFormEmail({
  subject: 'Formularz: Kontakt',
  text,
  replyTo: 'jan.testowy@example.com',
});

console.log(`Wysłano podgląd (produkcja) na: ${result.to}`);
