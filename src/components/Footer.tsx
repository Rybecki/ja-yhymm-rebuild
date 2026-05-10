import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Facebook, Instagram, Landmark, MapPin, Mail, Phone, Youtube } from 'lucide-react';
import { OFFER_SUBPAGES } from '../data/offerPages';

const hashLink = (id: string) =>
  id === 'kontakt' ? '/kontakt' : id === 'dla-ciebie' ? '/dla-ciebie/formularze' : `/#${id}`;

const aboutLinks = [
  { label: 'Poznaj nas', to: '/o-nas' },
  { label: 'Nasz zespół', to: '/o-nas#nasz-zespol' },
  { label: 'Rekomendacje', to: '/o-nas#rekomendacje' },
] as const;

const offerLinks = [{ label: 'Przegląd oferty', to: '/oferta' }, ...OFFER_SUBPAGES.map((p) => ({ label: p.title, to: `/oferta/${p.slug}` }))];

const menuItems: Array<{ label: string; hash: string }> = [
  { label: 'Tematyka', hash: 'tematyka' },
  { label: 'Kontakt', hash: 'kontakt' },
  { label: 'Dla Ciebie', hash: 'dla-ciebie' },
];

export function Footer() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  return (
    <footer className="bg-dark pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h5 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-primary">Menu</h5>
              <ul className="space-y-4">
                <li>
                  <button
                    type="button"
                    className="flex w-full items-center justify-start gap-1.5 text-left text-white/60 font-medium hover:text-primary transition-colors"
                    aria-expanded={aboutOpen}
                    onClick={() => setAboutOpen((o) => !o)}
                  >
                    O nas
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>
                  {aboutOpen ? (
                    <ul className="mt-2 ml-1 pl-3 border-l border-primary/30 space-y-2">
                      {aboutLinks.map((item) => (
                        <li key={item.to}>
                          <Link to={item.to} className="text-white/60 hover:text-primary transition-colors text-sm">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
                <li>
                  <button
                    type="button"
                    className="flex w-full items-center justify-start gap-1.5 text-left text-white/60 font-medium hover:text-primary transition-colors"
                    aria-expanded={offerOpen}
                    onClick={() => setOfferOpen((o) => !o)}
                  >
                    Oferta
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-200 ${offerOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>
                  {offerOpen ? (
                    <ul className="mt-2 ml-1 pl-3 border-l border-primary/30 space-y-2">
                      {offerLinks.map((item) => (
                        <li key={item.to}>
                          <Link to={item.to} className="text-white/60 hover:text-primary transition-colors text-sm">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
                <li>
                  <Link to="/galeria" className="text-white/60 hover:text-primary transition-colors">
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link to="/aktualnosci" className="text-white/60 hover:text-primary transition-colors">
                    Aktualności
                  </Link>
                </li>
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a href={hashLink(item.hash)} className="text-white/60 hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-primary">Kontakt</h5>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="text-primary shrink-0 mt-0.5" size={20} />
                  <div className="min-w-0 flex-1 flex flex-col md:flex-row md:items-stretch gap-6 md:gap-0">
                    <div className="flex-1 min-w-0 md:pr-8">
                      <p className="text-white font-semibold">Fundacja JA YHYMM...</p>
                      <p className="text-white/90 mt-1 leading-snug">Integracja - Sport - Turystyka - Wypoczynek</p>
                      <p className="text-white/85 mt-2 text-sm tracking-wide">NIP 954 276 19 93</p>
                    </div>
                    <div className="h-px w-full shrink-0 bg-primary/40 md:hidden" aria-hidden />
                    <div className="hidden md:block w-px shrink-0 bg-primary/40 self-stretch min-h-[3.5rem]" aria-hidden />
                    <div className="flex-1 min-w-0 md:pl-8">
                      <p className="text-white font-semibold">A Bo Co... Spółka z o.o.</p>
                      <p className="text-white/85 mt-2 text-sm tracking-wide">NIP 954 289 0070</p>
                      <p className="text-white/90 mt-3 leading-snug">ul. Niwna 9, 40-406 Katowice</p>
                    </div>
                  </div>
                </li>
                <li className="flex w-full flex-row items-start gap-3 justify-start text-left sm:justify-center sm:text-center">
                  <Mail className="text-primary shrink-0 mt-0.5" size={22} aria-hidden />
                  <a
                    href="mailto:biuro@ja-yhymm.pl"
                    className="text-white hover:text-primary transition-colors min-w-0 break-words text-base md:text-lg"
                  >
                    biuro@ja-yhymm.pl
                  </a>
                </li>
                <li className="flex w-full flex-row items-start gap-3 justify-start text-left sm:justify-center sm:text-center">
                  <Phone className="text-primary shrink-0 mt-0.5" size={22} aria-hidden />
                  <a href="tel:+48794997714" className="text-white hover:text-primary transition-colors min-w-0 text-base md:text-lg">
                    +48 794-997-714
                  </a>
                </li>
                <li className="flex w-full flex-row items-start gap-3 justify-start text-left sm:justify-center sm:text-center text-white">
                  <Landmark size={22} className="text-primary shrink-0 mt-0.5" aria-hidden />
                  <div className="space-y-2 text-sm md:text-base leading-snug min-w-0 text-left">
                    <p>
                      <span className="font-semibold text-white/90">Fundacja JA YHYMM...</span>{' '}
                      <span className="font-mono tracking-tight text-white/85">49 1050 1214 1000 0090 3085 1225</span>
                    </p>
                    <p>
                      <span className="font-semibold text-white/90">A Bo Co... Spółka z o.o.</span>{' '}
                      <span className="font-mono tracking-tight text-white/85">54 1050 1214 1000 0090 8549 4533</span>
                    </p>
                  </div>
                </li>
                <li className="flex w-full flex-wrap items-center justify-center gap-5 text-white pt-1">
                  <a
                    href="https://www.facebook.com/jayhymmfp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors"
                    aria-label="Facebook — JA YHYMM"
                  >
                    <Facebook className="w-7 h-7 md:w-9 md:h-9" strokeWidth={1.75} aria-hidden />
                  </a>
                  <a
                    href="https://www.instagram.com/jayhymm_najlepszeobozy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors"
                    aria-label="Instagram — JA YHYMM"
                  >
                    <Instagram className="w-7 h-7 md:w-9 md:h-9" strokeWidth={1.75} aria-hidden />
                  </a>
                  <a
                    href="https://www.youtube.com/@jayhymm1996"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors"
                    aria-label="YouTube — JA YHYMM"
                  >
                    <Youtube className="w-7 h-7 md:w-9 md:h-9" strokeWidth={1.75} aria-hidden />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-white/5">
            <img
              src="/utils/logo_ja-yhymm.png"
              alt="Ja-yhymm Logo"
              className="h-12 w-auto object-contain mb-8"
              referrerPolicy="no-referrer"
            />
            <blockquote className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-6">
              <span className="text-primary not-italic">„</span>
              Znaczy, każdy swe obowiązki musi wykonywać porządnie. Ci, którzy nie wykonują ich jak mogą najlepiej — to znaczy, na ile ich stać fizycznie i duchowo — niszczą sami siebie.
              <span className="text-primary not-italic">”</span>
            </blockquote>
            <cite className="text-primary font-bold not-italic block mb-8">
              — Karol Olgierd Borchardt, "Znaczy Kapitan"
            </cite>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center space-y-3">
          <p className="text-xs tracking-wide text-white/40">Wszystkie prawa zastrzeżone © 2026 JA YHYMM</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs tracking-wide">
            <Link to="/kontakt" className="text-white hover:text-primary transition-colors">
              Polityka prywatności
            </Link>
            <Link to="/dla-ciebie/regulaminy" className="text-white hover:text-primary transition-colors">
              Regulamin
            </Link>
          </div>
          <div className="text-xs tracking-wide">
            <span className="text-white/40">Design &amp; Realizacja: </span>
            <a href="https://patryktomczyk.dev" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
              patryktomczyk.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
