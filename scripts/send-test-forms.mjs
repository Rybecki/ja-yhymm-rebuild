import dotenv from 'dotenv';
import { sendFormEmail } from '../server/mail.mjs';

dotenv.config();

const TEST_REPLY = 'test.formularz@example.com';

const TEST_FORMS = [
  {
    subject: '[TEST 1/9] Formularz kontaktowy — JA YHYMM',
    text: [
      'Formularz: Kontakt (/kontakt)',
      '',
      'Imię: Jan Testowy',
      'Email: jan.testowy@example.com',
      'Telefon: +48 600 100 200',
      'Wiadomość: Test wysyłki formularza kontaktowego ze strony JA YHYMM.',
    ].join('\n'),
    replyTo: TEST_REPLY,
  },
  {
    subject: '[TEST 2/9] Zgłoszenie — obóz młodzieżowy',
    text: [
      'Formularz: Obozy młodzieżowe (/dla-ciebie/formularze)',
      '',
      'Zgłaszający: Anna Testowa',
      'Telefon: +48 600 100 201',
      'Email: anna.testowa@example.com',
      'Obóz: Jura Military Camp',
      'Dziecko: Kasia Testowa, PESEL: 11223344556',
      'Turnus: 01.07.2026 – 14.07.2026',
      'Transport: Autobus, miejscowość: Katowice',
    ].join('\n'),
    replyTo: TEST_REPLY,
  },
  {
    subject: '[TEST 3/9] Zgłoszenie — wycieczki i obozy szkolne',
    text: [
      'Formularz: Wycieczki i obozy szkolne',
      '',
      'Szkoła: SP nr 1 Testowo',
      'Uczestnicy: 28, opiekunowie: 2',
      'Termin: 15.05.2026',
      'Wybrane tematyka: Paintball, Survival, Quady',
    ].join('\n'),
    replyTo: TEST_REPLY,
  },
  {
    subject: '[TEST 4/9] Zgłoszenie — imprezy / eventy',
    text: [
      'Formularz: Imprezy / Eventy / Szkolenia',
      '',
      'Firma: Test Event Sp. z o.o.',
      'Uczestnicy: 45',
      'Termin: 20.06.2026',
      'Wybrane tematyka: Dmuchańce, Paintball, Off-road',
    ].join('\n'),
    replyTo: TEST_REPLY,
  },
  {
    subject: '[TEST 5/9] Wypożyczalnia — e-rowery',
    text: [
      'Formularz: Rezerwacja e-rowerów (/wypozyczalnia/e-rowery)',
      '',
      'Imię i nazwisko: Piotr Rowerowy',
      'Telefon: +48 600 100 205',
      'Email: piotr.rowerowy@example.com',
      'Model: Kross Influx Hybrid 1.0',
      'Pakiet: 2 dni',
      'Data od: 2026-06-10, do: 2026-06-12',
    ].join('\n'),
    replyTo: 'piotr.rowerowy@example.com',
  },
  {
    subject: '[TEST 6/9] Wypożyczalnia — kajaki',
    text: [
      'Formularz: Rezerwacja kajaków (/wypozyczalnia/kajaki)',
      '',
      'Imię i nazwisko: Maria Kajakowa',
      'Telefon: +48 600 100 206',
      'Email: maria.kajakowa@example.com',
      'Zestaw: 2-os. kajak + kamizelki',
      'Data od: 2026-07-01, do: 2026-07-01',
    ].join('\n'),
    replyTo: 'maria.kajakowa@example.com',
  },
  {
    subject: '[TEST 7/9] Wypożyczalnia — autolaweta',
    text: [
      'Formularz: Auto-laweta (/wypozyczalnia/autolaweta)',
      '',
      'Imię i nazwisko: Tomasz Lawetowy',
      'Telefon: +48 600 100 207',
      'Email: tomasz.lawetowy@example.com',
      'Pakiet: Transport pojazdu',
      'Ładunek: Samochód osobowy',
    ].join('\n'),
    replyTo: 'tomasz.lawetowy@example.com',
  },
  {
    subject: '[TEST 8/9] Wypożyczalnia — VIP Bus',
    text: [
      'Formularz: VIP BUS (/wypozyczalnia/vip-bus)',
      '',
      'Imię i nazwisko: Ewa Busowa',
      'Telefon: +48 600 100 208',
      'Email: ewa.busowa@example.com',
      'Pasażerowie: 12',
      'Termin: 2026-08-15',
    ].join('\n'),
    replyTo: 'ewa.busowa@example.com',
  },
  {
    subject: '[TEST 9/9] Wypożyczalnia — dmuchańce i eventy',
    text: [
      'Formularz: Dmuchańce (/wypozyczalnia/dmuchance)',
      '',
      'Imię i nazwisko: Krzysztof Eventowy',
      'Telefon: +48 600 100 209',
      'Email: krzysztof.eventowy@example.com',
      'Atrakcja: Zamek dmuchany + obsługa',
      'Data: 2026-09-01',
    ].join('\n'),
    replyTo: 'krzysztof.eventowy@example.com',
  },
];

console.log(`Wysyłka testów SMTP → ${process.env.FORM_RECIPIENT || 'biuro@ja-yhymm.pl'}`);

for (const form of TEST_FORMS) {
  try {
    const result = await sendFormEmail(form);
    console.log(`OK: ${form.subject} → ${result.to}`);
  } catch (error) {
    console.error(`BŁĄD: ${form.subject}`);
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}

if (!process.exitCode) {
  console.log('Wszystkie testowe formularze wysłane.');
}
