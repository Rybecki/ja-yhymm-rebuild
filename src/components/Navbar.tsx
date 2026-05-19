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
const dlaCiebieSubmenu = [
  { label: 'Strefa rodzica', to: '/dla-ciebie/strefa-rodzica' },
  { label: 'Regulaminy', to: '/dla-ciebie/regulaminy' },
  { label: 'Formularze', to: '/dla-ciebie/formularze' },
] as const;

const contactSubmenu = [{ label: 'Napisz do nas', to: '/kontakt#kontakt' }] as const;

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
  const [mobileDlaCiebieOpen, setMobileDlaCiebieOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('mobile-menu-open', isMobileMenuOpen);
    return () => document.documentElement.classList.remove('mobile-menu-open');
  }, [isMobileMenuOpen]);

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileOfferOpen(false);
    setMobileTopicsOpen(false);
    setMobileRentalOpen(false);
    setMobileContactOpen(false);
    setMobileDlaCiebieOpen(false);
  };

  const desktopDropdown =
    'absolute top-full right-0 z-[100] pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200';

  return (
    <>
    <nav
      className={`fixed top-0 inset-x-0 z-50 w-full overflow-visible transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-dark/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}
    >
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-10 flex justify-between items-center gap-3 overflow-visible">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={closeMobile}>
          <img
            src="/utils/logo-ja-yhymm-transparent.png"
            alt="JA YHYMM — logo"
            data-no-photo-filter
            decoding="async"
            className="h-9 lg:h-10 xl:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-4 xl:gap-5 2xl:gap-6 font-display flex-nowrap overflow-visible">
          <div className="relative overflow-visible group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
              O nas
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className={`${desktopDropdown} min-w-[260px]`}>
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

          <div className="relative overflow-visible group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
              Oferta
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className={`${desktopDropdown} min-w-[280px]`}>
              <div className="rounded-xl border border-white/10 bg-dark-lighter/95 backdrop-blur-md py-2 shadow-xl max-h-[min(70vh,520px)] overflow-y-auto overscroll-contain">
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

          <div className="relative overflow-visible group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
              Tematyka
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className={`${desktopDropdown} min-w-[320px]`}>
              <div className="rounded-xl border border-white/10 bg-dark-lighter/95 backdrop-blur-md py-2 shadow-xl max-h-[min(70vh,520px)] overflow-y-auto overscroll-contain">
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

          <Link
            to="/galeria"
            className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide whitespace-nowrap shrink-0"
          >
            Galeria
          </Link>

          <Link
            to="/aktualnosci"
            className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide whitespace-nowrap shrink-0"
          >
            Aktualności
          </Link>

          <div className="relative overflow-visible group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
              Wypożyczalnia
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className={`${desktopDropdown} min-w-[220px]`}>
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

          <div className="relative overflow-visible group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
              Dla Ciebie
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className={`${desktopDropdown} min-w-[260px]`}>
              <div className="rounded-xl border border-white/10 bg-dark-lighter/95 backdrop-blur-md py-2 shadow-xl">
                {dlaCiebieSubmenu.map((item) => (
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

          <div className="relative overflow-visible group before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
              Kontakt
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className={`${desktopDropdown} min-w-[220px]`}>
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
              className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:794997714"
            className="flex items-center gap-2 bg-primary text-dark px-4 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 whitespace-nowrap shrink-0"
          >
            <Phone size={16} />
            794 997 714
          </a>
        </div>

        <button
          type="button"
          className="relative z-[60] lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute top-full left-0 right-0 z-40 border-t border-white/10 bg-dark-lighter p-4 sm:p-6 lg:hidden max-h-[min(85vh,100dvh)] overflow-y-auto overscroll-contain touch-pan-y"
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
                onClick={() => setMobileDlaCiebieOpen(!mobileDlaCiebieOpen)}
                aria-expanded={mobileDlaCiebieOpen}
              >
                Dla Ciebie
                <ChevronDown
                  size={22}
                  className={`shrink-0 transition-transform transition-colors text-white/80 group-hover:text-primary ${mobileDlaCiebieOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileDlaCiebieOpen && (
                <div className="overflow-hidden pl-3 border-l-2 border-primary/40 mb-2">
                  <div className="flex flex-col gap-2 pb-1 pt-1">
                    {dlaCiebieSubmenu.map((item) => (
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
    </>
  );
}
