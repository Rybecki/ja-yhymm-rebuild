import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Facebook, Landmark, MapPin, Mail, Phone } from 'lucide-react';
import { OFFER_SUBPAGES } from '../data/offerPages';

const hashLink = (id: string) => (id === 'kontakt' ? '/kontakt' : id === 'dla-ciebie' ? '/kontakt#dla-ciebie' : `/#${id}`);

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
                  <MapPin className="text-primary shrink-0" size={20} />
                  <span className="text-white">
                    Fundacja JA YHYMM... <br />
                    Integracja - Sport - Turystyka - Wypoczynek <br />
                    NIP 954 276 19 93
                    <div className="my-3 w-full border-t-2 border-primary" aria-hidden />
                    A Bo Co... Spółka z o.o. <br />
                    NIP 954 289 0070 <br />
                    ul. Niwna 9, 40-406 Katowice
                  </span>
                </li>
                <li className="flex gap-4">
                  <Mail className="text-primary shrink-0" size={20} />
                  <a href="mailto:biuro@ja-yhymm.pl" className="text-white hover:text-primary transition-colors">biuro@ja-yhymm.pl</a>
                </li>
                <li className="flex gap-4">
                  <Phone className="text-primary shrink-0" size={20} />
                  <a href="tel:794997714" className="text-white hover:text-primary transition-colors">+48 794-997-714</a>
                </li>
                <li className="flex gap-3 text-white">
                  <Landmark size={18} className="text-primary shrink-0 mt-1" aria-hidden />
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-semibold">Fundacja JA YHYMM...</span>
                      <span className="font-mono block sm:inline sm:ml-2">49 1050 1214 1000 0090 3085 1225</span>
                    </p>
                    <p>
                      <span className="font-semibold">A Bo Co... Spółka z o.o.</span>
                      <span className="font-mono block sm:inline sm:ml-2">54 1050 1214 1000 0090 8549 4533</span>
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 text-white">
                  <Facebook size={18} className="text-primary shrink-0 mt-1" aria-hidden />
                  <a href="https://www.facebook.com/jayhymmfp" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
                    facebook
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

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs uppercase tracking-widest">
          <p>Wszystkie prawa zastrzeżone © 2026 Ja-yhymm</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-primary transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
