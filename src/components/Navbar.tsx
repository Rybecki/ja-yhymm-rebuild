import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { OFFER_SUBPAGES } from '../data/offerPages';
import { TOPIC_SUBPAGES } from '../data/topicPages';

const hashLink = (id: string) => `/#${id}`;

const aboutSubmenu = [
  { label: 'Poznaj nas', to: '/o-nas' },
  { label: 'Nasz zespół', to: '/o-nas#nasz-zespol' },
  { label: 'Rekomendacje', to: '/o-nas#rekomendacje' },
] as const;

const offerSubmenu = [
  { label: 'Przegląd oferty', to: '/oferta' },
  ...OFFER_SUBPAGES.map((p) => ({ label: p.title, to: `/oferta/${p.slug}` })),
];

const topicSubmenu = TOPIC_SUBPAGES.map((topic) => ({ label: topic.title, to: `/tematyka/${topic.slug}` }));
const rentalSubmenu = [
  { label: 'E - rowery', to: '/wypozyczalnia/e-rowery' },
  { label: 'Kajaki', to: '/wypozyczalnia/kajaki' },
  { label: 'VIP Bus', to: '/wypozyczalnia/vip-bus' },
  { label: 'Autolaweta', to: '/wypozyczalnia/autolaweta' },
  { label: 'Dmuchańce', to: '/wypozyczalnia/dmuchance' },
] as const;
const contactSubmenu = [
  { label: 'Strefa rodzica', to: '/kontakt/strefa-rodzica' },
  { label: 'Regulaminy', to: '/kontakt/regulaminy' },
  { label: 'Napisz do nas', to: '/kontakt#kontakt' },
  { label: 'Formularze zgłoszeniowe', to: '/kontakt#dla-ciebie' },
] as const;

type NavHashItem = { name: string; hash: string };

const navLinksRest: NavHashItem[] = [
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileOfferOpen, setMobileOfferOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);
  const [mobileRentalOpen, setMobileRentalOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileOfferOpen(false);
    setMobileTopicsOpen(false);
    setMobileRentalOpen(false);
    setMobileContactOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={closeMobile}>
          <img
            src="/utils/logo_ja-yhymm.png"
            alt="Ja-yhymm Logo"
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {}
        <div className="hidden lg:flex items-center gap-8 font-display">
          <div className="relative group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-['']">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white cursor-default transition-colors group-hover:text-primary">
              O nas
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 min-w-[260px] z-50 opacity-0 invisible translate-y-0.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 max-h-[min(70vh,520px)] overflow-y-auto">
              <div className="rounded-xl border border-white/10 bg-dark-lighter/95 backdrop-blur-md py-2 shadow-xl">
                {aboutSubmenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white/90 hover:bg-white/5 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-['']">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white cursor-default transition-colors group-hover:text-primary">
              Oferta
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 min-w-[280px] z-50 opacity-0 invisible translate-y-0.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 max-h-[min(70vh,520px)] overflow-y-auto">
              <div className="rounded-xl border border-white/10 bg-dark-lighter/95 backdrop-blur-md py-2 shadow-xl">
                {offerSubmenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white/90 hover:bg-white/5 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-['']">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white cursor-default transition-colors group-hover:text-primary">
              Tematyka
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 min-w-[320px] z-50 opacity-0 invisible translate-y-0.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 max-h-[min(70vh,520px)] overflow-y-auto">
              <div className="rounded-xl border border-white/10 bg-dark-lighter/95 backdrop-blur-md py-2 shadow-xl">
                {topicSubmenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white/90 hover:bg-white/5 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/galeria" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wider">
            Galeria
          </Link>

          <Link to="/aktualnosci" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wider">
            Aktualności
          </Link>

          <div className="relative group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-['']">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white cursor-default transition-colors group-hover:text-primary">
              Wypożyczalnia
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 min-w-[220px] z-50 opacity-0 invisible translate-y-0.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="rounded-xl border border-white/10 bg-dark-lighter/95 backdrop-blur-md py-2 shadow-xl">
                {rentalSubmenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white/90 hover:bg-white/5 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-['']">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white cursor-default transition-colors group-hover:text-primary">
              Kontakt
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 min-w-[260px] z-50 opacity-0 invisible translate-y-0.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="rounded-xl border border-white/10 bg-dark-lighter/95 backdrop-blur-md py-2 shadow-xl">
                {contactSubmenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white/90 hover:bg-white/5 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinksRest.map((link) => (
            <a
              key={link.name}
              href={hashLink(link.hash)}
              className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:794997714"
            className="flex items-center gap-2 bg-primary text-dark px-4 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105"
          >
            <Phone size={16} />
            794 997 714
          </a>
        </div>

        <button type="button" className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-lighter border-t border-white/10 p-6 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className="group flex items-center justify-between w-full text-lg font-medium text-white/80 py-2 rounded-lg px-1 -mx-1 hover:text-primary hover:bg-white/5 transition-colors text-left"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                aria-expanded={mobileAboutOpen}
              >
                O nas
                <ChevronDown
                  size={22}
                  className={`shrink-0 transition-transform transition-colors text-white/80 group-hover:text-primary ${mobileAboutOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="overflow-hidden pl-3 border-l-2 border-primary/40 mb-2">
                  <div className="flex flex-col gap-2 pb-1 pt-1">
                    {aboutSubmenu.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="text-base text-white/80 hover:text-primary transition-colors py-1"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="button"
                className="group flex items-center justify-between w-full text-lg font-medium text-white/80 py-2 rounded-lg px-1 -mx-1 hover:text-primary hover:bg-white/5 transition-colors text-left"
                onClick={() => setMobileOfferOpen(!mobileOfferOpen)}
                aria-expanded={mobileOfferOpen}
              >
                Oferta
                <ChevronDown
                  size={22}
                  className={`shrink-0 transition-transform transition-colors text-white/80 group-hover:text-primary ${mobileOfferOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileOfferOpen && (
                <div className="overflow-hidden pl-3 border-l-2 border-primary/40 mb-2">
                  <div className="flex flex-col gap-2 pb-1 pt-1 max-h-64 overflow-y-auto">
                    {offerSubmenu.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="text-base text-white/80 hover:text-primary transition-colors py-1"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="button"
                className="group flex items-center justify-between w-full text-lg font-medium text-white/80 py-2 rounded-lg px-1 -mx-1 hover:text-primary hover:bg-white/5 transition-colors text-left"
                onClick={() => setMobileTopicsOpen(!mobileTopicsOpen)}
                aria-expanded={mobileTopicsOpen}
              >
                Tematyka
                <ChevronDown
                  size={22}
                  className={`shrink-0 transition-transform transition-colors text-white/80 group-hover:text-primary ${mobileTopicsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileTopicsOpen && (
                <div className="overflow-hidden pl-3 border-l-2 border-primary/40 mb-2">
                  <div className="flex flex-col gap-2 pb-1 pt-1 max-h-64 overflow-y-auto">
                    {topicSubmenu.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="text-base text-white/80 hover:text-primary transition-colors py-1"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Link
                to="/galeria"
                className="text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMobile}
              >
                Galeria
              </Link>

              <Link
                to="/aktualnosci"
                className="text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMobile}
              >
                Aktualności
              </Link>

              <button
                type="button"
                className="group flex items-center justify-between w-full text-lg font-medium text-white/80 py-2 rounded-lg px-1 -mx-1 hover:text-primary hover:bg-white/5 transition-colors text-left"
                onClick={() => setMobileRentalOpen(!mobileRentalOpen)}
                aria-expanded={mobileRentalOpen}
              >
                Wypożyczalnia
                <ChevronDown
                  size={22}
                  className={`shrink-0 transition-transform transition-colors text-white/80 group-hover:text-primary ${mobileRentalOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileRentalOpen && (
                <div className="overflow-hidden pl-3 border-l-2 border-primary/40 mb-2">
                  <div className="flex flex-col gap-2 pb-1 pt-1">
                    {rentalSubmenu.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="text-base text-white/80 hover:text-primary transition-colors py-1"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="button"
                className="group flex items-center justify-between w-full text-lg font-medium text-white/80 py-2 rounded-lg px-1 -mx-1 hover:text-primary hover:bg-white/5 transition-colors text-left"
                onClick={() => setMobileContactOpen(!mobileContactOpen)}
                aria-expanded={mobileContactOpen}
              >
                Kontakt
                <ChevronDown
                  size={22}
                  className={`shrink-0 transition-transform transition-colors text-white/80 group-hover:text-primary ${mobileContactOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileContactOpen && (
                <div className="overflow-hidden pl-3 border-l-2 border-primary/40 mb-2">
                  <div className="flex flex-col gap-2 pb-1 pt-1">
                    {contactSubmenu.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="text-base text-white/80 hover:text-primary transition-colors py-1"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {navLinksRest.map((link) => (
                <a
                  key={link.name}
                  href={hashLink(link.hash)}
                  onClick={closeMobile}
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:794997714"
                className="flex items-center justify-center gap-2 bg-primary text-dark px-4 py-3 rounded-xl font-bold mt-2"
              >
                <Phone size={18} />
                794 997 714
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
