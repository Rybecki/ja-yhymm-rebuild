import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { getOfferNavSubmenu } from '../data/offerPages';
import { TOPIC_SUBPAGES } from '../data/topicPages';

const hashLink = (id: string) => `/#${id}`;

const aboutSubmenu = [
  { label: 'Poznaj nas', to: '/o-nas' },
  { label: 'Nasz zespół', to: '/o-nas#nasz-zespol' },
  { label: 'Rekomendacje', to: '/o-nas#rekomendacje' },
] as const;

const offerSubmenu = getOfferNavSubmenu();

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

const MOBILE_MENU_TOP = 'calc(4.5rem + env(safe-area-inset-top, 0px))';

type MobileNavSectionProps = {
  label: string;
  items: readonly { label: string; to: string }[];
  scrollable?: boolean;
  onNavigate: () => void;
};

function MobileNavSection({ label, items, scrollable, onNavigate }: MobileNavSectionProps) {
  return (
    <details className="group border-b border-white/5 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 py-3 text-lg font-medium text-white/80 [&::-webkit-details-marker]:hidden">
        <span>{label}</span>
        <ChevronDown
          size={22}
          className="shrink-0 text-white/80 transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className={`mb-2 pl-3 border-l-2 border-primary/40 ${scrollable ? 'max-h-64 overflow-y-auto' : ''}`}>
        <div className="flex flex-col gap-1 pb-2 pt-1">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-base text-white/80 hover:text-primary transition-colors py-2 min-h-10 flex items-center"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('mobile-menu-open', isMobileMenuOpen);
    return () => document.documentElement.classList.remove('mobile-menu-open');
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const desktopNavQuery = window.matchMedia('(min-width: 64rem)');
    const handleViewportChange = () => {
      if (desktopNavQuery.matches) closeMobile();
    };
    desktopNavQuery.addEventListener('change', handleViewportChange);
    window.addEventListener('orientationchange', handleViewportChange);
    window.addEventListener('resize', handleViewportChange);
    return () => {
      desktopNavQuery.removeEventListener('change', handleViewportChange);
      window.removeEventListener('orientationchange', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
  };

  const desktopDropdown =
    'absolute top-full right-0 z-[100] pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200';

  return (
    <>
    <nav
      className={`fixed top-0 inset-x-0 w-full overflow-visible transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${isMobileMenuOpen ? 'z-[210]' : 'z-[100]'} ${isScrolled || isMobileMenuOpen ? 'bg-dark/90 backdrop-blur-md shadow-xl [--navbar-offset:calc(4.5rem+env(safe-area-inset-top,0px))]' : 'bg-transparent [--navbar-offset:calc(5.5rem+env(safe-area-inset-top,0px))]'}`}
    >
      <div
        className={`relative z-[101] mx-auto w-full max-w-none flex justify-between items-center gap-3 overflow-visible ps-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] px-4 sm:px-6 lg:px-8 xl:px-10 ${isScrolled || isMobileMenuOpen ? 'min-h-[4.5rem]' : 'min-h-[5.5rem]'}`}
      >
        <Link to="/" className="flex items-center shrink-0 self-center" onClick={closeMobile}>
          <img
            src="/utils/logo-jayhymm.png"
            alt="JAYHYMM — logo"
            data-no-photo-filter
            decoding="async"
            className="h-9 lg:h-10 xl:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-3 xl:gap-5 2xl:gap-6 font-display flex-nowrap overflow-visible min-w-0 self-stretch">
          <div className="relative overflow-visible group flex items-center self-stretch before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
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

          <div className="relative overflow-visible group flex items-center self-stretch before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
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

          <div className="relative overflow-visible group flex items-center self-stretch before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
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
            className="inline-flex items-center self-center text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide whitespace-nowrap shrink-0"
          >
            Galeria
          </Link>

          <Link
            to="/aktualnosci"
            className="inline-flex items-center self-center text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide whitespace-nowrap shrink-0"
          >
            Aktualności
          </Link>

          <div className="relative overflow-visible group flex items-center self-stretch before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
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

          <div className="relative overflow-visible group flex items-center self-stretch before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
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

          <div className="relative overflow-visible group flex items-center self-stretch before:absolute before:left-0 before:right-0 before:top-full before:z-40 before:h-3 before:content-[''] shrink-0">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white cursor-default transition-colors group-hover:text-primary whitespace-nowrap">
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
              className="inline-flex items-center self-center text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:794997714"
            className="inline-flex items-center self-center gap-2 bg-primary text-dark px-4 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 whitespace-nowrap shrink-0"
          >
            <Phone size={16} />
            794 997 714
          </a>
        </div>

        <div className="flex items-center self-center shrink-0 lg:hidden">
          <button
            type="button"
            className="relative flex items-center justify-center min-h-11 min-w-11 text-white touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen &&
        createPortal(
          <div className="lg:hidden" role="dialog" aria-modal="true" aria-label="Menu nawigacji">
            <button
              type="button"
              className="fixed inset-0 z-[190] bg-black/55 touch-manipulation"
              aria-label="Zamknij menu"
              onClick={closeMobile}
            />
            <nav
              className="fixed inset-x-0 z-[200] h-auto w-full max-h-[calc(100dvh-4.5rem-env(safe-area-inset-top,0px))] overflow-y-auto overscroll-contain border-t border-white/10 bg-dark-lighter p-4 sm:p-6 pb-[max(1rem,env(safe-area-inset-bottom))]"
              style={{ top: MOBILE_MENU_TOP }}
              aria-label="Menu mobilne"
            >
              <MobileNavSection label="O nas" items={aboutSubmenu} onNavigate={closeMobile} />
              <MobileNavSection label="Oferta" items={offerSubmenu} scrollable onNavigate={closeMobile} />
              <MobileNavSection label="Tematyka" items={topicSubmenu} scrollable onNavigate={closeMobile} />

              <Link
                to="/galeria"
                className="block border-b border-white/5 py-3 text-lg font-medium text-white/80 hover:text-primary transition-colors"
                onClick={closeMobile}
              >
                Galeria
              </Link>

              <Link
                to="/aktualnosci"
                className="block border-b border-white/5 py-3 text-lg font-medium text-white/80 hover:text-primary transition-colors"
                onClick={closeMobile}
              >
                Aktualności
              </Link>

              <MobileNavSection label="Wypożyczalnia" items={rentalSubmenu} onNavigate={closeMobile} />
              <MobileNavSection label="Dla Ciebie" items={dlaCiebieSubmenu} onNavigate={closeMobile} />
              <MobileNavSection label="Kontakt" items={contactSubmenu} onNavigate={closeMobile} />

              {navLinksRest.map((link) => (
                <a
                  key={link.name}
                  href={hashLink(link.hash)}
                  onClick={closeMobile}
                  className="block border-b border-white/5 py-3 text-lg font-medium text-white/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:794997714"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-dark"
              >
                <Phone size={18} />
                794 997 714
              </a>
            </nav>
          </div>,
          document.body
        )}
    </nav>
    </>
  );
}
