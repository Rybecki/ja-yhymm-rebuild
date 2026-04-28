import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ChevronDown, MapPin, User, Users, Phone, Mail, Landmark, Facebook } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SUMMER_OFFER_SECTIONS } from '../data/summerOffers';
import { getSummerOfferDetail } from '../data/summerOfferDetails';
import { WINTER_OFFERS, getWinterOfferDetail } from '../data/winterOffers';

function ContactInfoAndForm() {
  return (
    <section id="kontakt" className="section-padding bg-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto lg:min-h-[70vh] flex flex-col justify-center">
        <div className="text-center mb-12">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Kontakt</h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase font-display text-white">Skontaktuj się z nami</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:items-center">
          <div className="glass-card p-8 md:p-10 rounded-[2rem]">
            <h4 className="text-xl font-bold text-primary mb-6">Fundacja JA YHYMM...</h4>
            <div className="space-y-4 leading-relaxed">
              <p className="text-white font-medium">Integracja - Sport - Turystyka - Wypoczynek</p>
              <p className="flex gap-3 text-white/75">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <span>ul. Niwna 9, 40-406 Katowice</span>
              </p>
              <p className="flex gap-3 text-white/75">
                <Phone size={18} className="text-primary shrink-0 mt-1" />
                <a href="tel:+48794997714" className="hover:text-primary transition-colors">
                  +48 794-997-714
                </a>
              </p>
              <p className="flex gap-3 text-white/75">
                <Mail size={18} className="text-primary shrink-0 mt-1" />
                <a href="mailto:biuro@ja-yhymm.pl" className="hover:text-primary transition-colors">
                  biuro@ja-yhymm.pl
                </a>
              </p>
              <p className="flex gap-3 text-white/75">
                <Landmark size={18} className="text-primary shrink-0 mt-1" />
                <span className="font-mono text-sm">49 1050 1214 1000 0090 3085 1225</span>
              </p>
              <p className="flex gap-3 text-white/75">
                <Facebook size={18} className="text-primary shrink-0 mt-1" />
                <a href="https://www.facebook.com/jayhymmfp" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  facebook
                </a>
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-[2rem]"
          >
            <h4 className="text-xl font-bold text-primary mb-6">Formularz kontaktowy</h4>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Imię*</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Email*</label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Twój nr telefonu*</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Co możemy dla Ciebie zrobić?*</label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Wyślij wiadomość
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ApplicationFormsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTransport, setSelectedTransport] = useState<'Autobus' | 'Własny'>('Własny');
  const [departureTown, setDepartureTown] = useState('');
  const [youthConsent, setYouthConsent] = useState(false);
  const [schoolConsent, setSchoolConsent] = useState(false);
  const [eventConsent, setEventConsent] = useState(false);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedEventThemes, setSelectedEventThemes] = useState<string[]>([]);

  const tabs = ['Obozy młodzieżowe', 'Wycieczki i obozy szkolne', 'Imprezy/Eventy/Szkolenia'];
  const tripThemes = [
    'Paintball',
    'ASG',
    'Militarnie',
    'Wspinaczka',
    'Techniki linowe',
    'Survival',
    'Samoobrona i sztuki walki',
    'Nurkowanie',
    'Kajakarstwo',
    'Ratownictwo',
    'Off-road',
    'Sporty wodne',
    'Narciarstwo',
  ];
  const eventThemes = [
    'ASG',
    'Dmuchańce',
    'Gry i zabawy na wodzie',
    'Jazda konna',
    'Kajakarstwo',
    'Łuki',
    'Militarnie',
    'Narciarstwo',
    'Nurkowanie',
    'Off-road',
    'Paintball',
    'Przejażdżka Krazem',
    'Quady',
    'Ratownictwo',
    'Samoobrona i sztuki walki',
    'Sporty wodne',
    'Survival',
    'Ścianka wspinaczkowa',
    'Techniki linowe',
    'Wiatrówki',
    'Wspinaczka',
  ];

  const camps = useMemo(() => {
    const summerTitles = SUMMER_OFFER_SECTIONS.flatMap((section) => section.offers.map((offer) => offer.title));
    const winterTitles = WINTER_OFFERS.map((offer) => offer.title);
    return [...summerTitles, ...winterTitles];
  }, []);

  const dates = useMemo(() => {
    const summerDates = SUMMER_OFFER_SECTIONS.flatMap((section) =>
      section.offers.flatMap((offer) => {
        const detail = getSummerOfferDetail(offer.slug);
        if (!detail) return [];
        if (detail.termsGroups?.length) {
          return detail.termsGroups.flatMap((group) => group.terms.map((term) => term.dateRange));
        }
        return detail.terms.map((term) => term.dateRange);
      })
    );
    const winterDates = WINTER_OFFERS.flatMap((offer) => {
      const detail = getWinterOfferDetail(offer.slug);
      return detail ? detail.terms.map((term) => term.dateRange) : [];
    });
    const uniqueDates = new Map<string, string>();
    [...summerDates, ...winterDates].forEach((rawDate) => {
      const normalizedDate = rawDate
        .replace(/\s+/g, ' ')
        .replace(/\s*-\s*/g, '-')
        .replace(/\u2013/g, '-')
        .trim()
        .toLowerCase();
      if (!uniqueDates.has(normalizedDate)) {
        uniqueDates.set(normalizedDate, rawDate.trim());
      }
    });
    return Array.from(uniqueDates.values()).filter((date) => !date.startsWith('14.02') && !date.startsWith('21.02'));
  }, []);

  const toggleTheme = (theme: string) => {
    setSelectedThemes((previous) => (previous.includes(theme) ? previous.filter((item) => item !== theme) : [...previous, theme]));
  };
  const toggleEventTheme = (theme: string) => {
    setSelectedEventThemes((previous) => (previous.includes(theme) ? previous.filter((item) => item !== theme) : [...previous, theme]));
  };

  return (
    <section id="dla-ciebie" className="section-padding bg-dark-lighter">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Formularze zgłoszeniowe</h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase mb-8 font-display text-white">Zapisz się już teraz</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  activeTab === index ? 'bg-primary text-dark shadow-[0_0_15px_rgba(247,199,59,0.3)]' : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-8 md:p-12 rounded-[2rem]">
          {activeTab === 1 ? (
            <form className="space-y-10">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary">Zgłaszający (osoba do kontaktu)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Imię i nazwisko</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Numer telefonu</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Adres e-mail</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary">Informacje o szkole/uczelni</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Nazwa szkoły/uczelni</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Miejscowość</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Kod pocztowy</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Ulica</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Numer domu/lokalu</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Szkoła</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">---</option>
                        <option className="bg-dark">Podstawowa</option>
                        <option className="bg-dark">Średnia</option>
                        <option className="bg-dark">Uczelnia</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary">Specyfika wyjazdu</h4>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Chcemy zorganizować</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                      <option className="bg-dark">---</option>
                      <option className="bg-dark">Obóz dla klasy mundurowej</option>
                      <option className="bg-dark">Wycieczkę szkolną</option>
                      <option className="bg-dark">Wyjazd/obóz dla studentów</option>
                      <option className="bg-dark">Imprezę na terenie szkoły/uczelni</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary">Termin i parametry</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Termin wyjazdu</label>
                    <input type="text" placeholder="dd.mm.rrrr" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Ilość uczestników</label>
                    <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Ilość opiekunów</label>
                    <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Zakwaterowanie</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">---</option>
                        <option className="bg-dark">Pokoje</option>
                        <option className="bg-dark">Domki</option>
                        <option className="bg-dark">Namioty</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Wyżywienie</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">---</option>
                        <option className="bg-dark">Pełne (śniadanie, obiad, kolacja)</option>
                        <option className="bg-dark">Niepełne (śniadanie, obiadokolacja)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Ubezpieczenie</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">---</option>
                        <option className="bg-dark">Tak</option>
                        <option className="bg-dark">Nie</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Transport</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">---</option>
                        <option className="bg-dark">Tak</option>
                        <option className="bg-dark">Nie</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">Tematyka wyjazdu <span className="text-sm font-medium text-white/60">(zaznacz, co Cię interesuje)</span></h4>
                <div className="flex flex-wrap gap-2">
                  {tripThemes.map((theme) => (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => toggleTheme(theme)}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                        selectedThemes.includes(theme)
                          ? 'border-primary bg-primary text-dark'
                          : 'border-primary text-primary hover:bg-primary/10'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Deklarowana kwota na uczestnika (w zł)</label>
                  <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Dodatkowe uwagi</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                <input type="checkbox" className="mt-1 accent-primary" checked={schoolConsent} onChange={(event) => setSchoolConsent(event.target.checked)} />
                Wyrażam zgodę na przetwarzanie i wykorzystywanie podanych przeze mnie w formularzu danych osobowych do celów niezbędnych do
                potwierdzenia zgłoszenia dziecka na obóz (zgodnie z Ustawą z dnia 29 sierpnia 1997 roku o Ochronie Danych Osobowych Dz. U. nr 133,
                poz. 883 z późn. zmianami).
              </label>

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Wyślij zgłoszenie
              </button>
            </form>
          ) : activeTab === 2 ? (
            <form className="space-y-10">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary">Zgłaszający (osoba do kontaktu)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Imię i nazwisko</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Numer telefonu</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Adres e-mail</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary">Informacje o firmie/instytucji/osobie</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Nazwa firmy/instytucji/osoby</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Miejscowość</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Kod pocztowy</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Ulica</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Numer domu/lokalu</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary">Specyfika wyjazdu</h4>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Chcemy zorganizować</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                      <option className="bg-dark">---</option>
                      <option className="bg-dark">Wieczór kawalerski/panieński</option>
                      <option className="bg-dark">Piknik/festyn</option>
                      <option className="bg-dark">Szkolenie</option>
                      <option className="bg-dark">Urodziny</option>
                      <option className="bg-dark">Wycieczkę szkolną</option>
                      <option className="bg-dark">Wyjazd integracyjny</option>
                      <option className="bg-dark">Wypad offroadowy</option>
                      <option className="bg-dark">Wypad quadowy</option>
                      <option className="bg-dark">Inne</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-primary">Termin i parametry</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Termin wyjazdu</label>
                    <input type="text" placeholder="dd.mm.rrrr" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Ilość uczestników</label>
                    <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Ilość opiekunów</label>
                    <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Zakwaterowanie</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">---</option>
                        <option className="bg-dark">Brak</option>
                        <option className="bg-dark">Pokoje</option>
                        <option className="bg-dark">Namioty</option>
                        <option className="bg-dark">Domki</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Wyżywienie</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">---</option>
                        <option className="bg-dark">Pełne (śniadanie, obiad, kolacja)</option>
                        <option className="bg-dark">Niepełne (śniadanie, obiadokolacja)</option>
                        <option className="bg-dark">Grill</option>
                        <option className="bg-dark">Ognisko</option>
                        <option className="bg-dark">Wojskowa kuchnia polowa</option>
                        <option className="bg-dark">Inne</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Ubezpieczenie</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">---</option>
                        <option className="bg-dark">Tak</option>
                        <option className="bg-dark">Nie</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Transport</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">---</option>
                        <option className="bg-dark">Tak</option>
                        <option className="bg-dark">Nie</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">Tematyka wydarzenia <span className="text-sm font-medium text-white/60">(zaznacz, co Cię interesuje)</span></h4>
                <div className="flex flex-wrap gap-2">
                  {eventThemes.map((theme) => (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => toggleEventTheme(theme)}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                        selectedEventThemes.includes(theme)
                          ? 'border-primary bg-primary text-dark'
                          : 'border-primary text-primary hover:bg-primary/10'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Deklarowana kwota na uczestnika (w zł)</label>
                  <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Dodatkowe uwagi</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                <input type="checkbox" className="mt-1 accent-primary" checked={eventConsent} onChange={(event) => setEventConsent(event.target.checked)} />
                Wyrażam zgodę na przetwarzanie i wykorzystywanie podanych przeze mnie w formularzu danych osobowych do celów niezbędnych do
                potwierdzenia zgłoszenia dziecka na obóz (zgodnie z Ustawą z dnia 29 sierpnia 1997 roku o Ochronie Danych Osobowych Dz. U. nr 133,
                poz. 883 z późn. zmianami).
              </label>

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Wyślij zgłoszenie
              </button>
            </form>
          ) : (
            <form className="space-y-12">
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-primary">
                  <User size={24} /> Osoba zgłaszająca
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Imię i nazwisko</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Numer telefonu</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Adres email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Wybierz obóz</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">Wybierz z listy...</option>
                        {camps.map((c) => (
                          <option key={c} className="bg-dark">
                            {c}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-primary">
                  <Users size={24} /> Informacje o dziecku
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Imię i nazwisko dziecka</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Numer PESEL</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Data urodzenia</label>
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-primary">
                  <MapPin size={24} /> Adres zamieszkania/zameldowania
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Miejscowość</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Kod pocztowy</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Ulica</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Numer domu/lokalu</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-primary">
                  <Calendar size={24} /> Opcje wyjazdu
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Turnus</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10">
                        <option className="bg-dark">Wybierz termin...</option>
                        {dates.map((d) => (
                          <option key={d} className="bg-dark">
                            {d}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Transport</label>
                    <div className="flex gap-4">
                      <label className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                        <input
                          type="radio"
                          name="transport"
                          className="accent-primary"
                          checked={selectedTransport === 'Autobus'}
                          onChange={() => setSelectedTransport('Autobus')}
                        />
                        Autobus
                      </label>
                      <label className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                        <input
                          type="radio"
                          name="transport"
                          className="accent-primary"
                          checked={selectedTransport === 'Własny'}
                          onChange={() => setSelectedTransport('Własny')}
                        />
                        Własny
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Miejscowość wyjazdu</label>
                    <input
                      type="text"
                      value={departureTown}
                      onChange={(event) => setDepartureTown(event.target.value)}
                      disabled={selectedTransport !== 'Autobus'}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={selectedTransport === 'Autobus' ? 'Wpisz miejscowość wyjazdu' : ''}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Dodatkowe uwagi</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                </div>
              </div>

              {activeTab === 0 && (
                <label className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                  <input type="checkbox" className="mt-1 accent-primary" checked={youthConsent} onChange={(event) => setYouthConsent(event.target.checked)} />
                  Wyrażam zgodę na przetwarzanie i wykorzystywanie podanych przeze mnie w formularzu danych osobowych do celów niezbędnych do
                  potwierdzenia zgłoszenia dziecka na obóz (zgodnie z Ustawą z dnia 29 sierpnia 1997 roku o Ochronie Danych Osobowych Dz. U. nr 133,
                  poz. 883 z późn. zmianami).
                </label>
              )}

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Wyślij zgłoszenie
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main>
        <section className="section-padding bg-dark-lighter border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Kontakt</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Kontakt</h1>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
              Napisz lub zadzwoń - jesteśmy do dyspozycji
            </motion.h2>
          </div>
        </section>
        <ContactInfoAndForm />
        <div
          className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-90"
          aria-hidden
        />
        <ApplicationFormsSection />
      </main>
      <Footer />
    </div>
  );
}
