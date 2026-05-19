import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PARENT_ZONE_HERO_IMAGE, PARENT_ZONE_ROUTE } from '../constants/parentZone';

/** CTA do Strefy rodzica na stronach obozów lato/zima — szerokość jak box „O obozie”. */
export function ParentZoneCampCta() {
  return (
    <aside
      className="w-full rounded-2xl border-2 border-primary/40 bg-dark-lighter/90 overflow-hidden shadow-[0_0_32px_rgba(247,199,59,0.1)] transition-colors duration-300 hover:border-primary/60"
      aria-label="Strefa rodzica"
    >
      <Link
        to={PARENT_ZONE_ROUTE}
        className="flex items-stretch gap-0 min-h-[7.25rem] sm:min-h-[8.5rem] md:min-h-[9.5rem] group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
      >
        <div className="relative w-[8.5rem] sm:w-44 md:w-52 lg:w-56 shrink-0 overflow-hidden">
          <img
            src={PARENT_ZONE_HERO_IMAGE}
            alt="Rodzina żegnająca dziecko przed wyjazdem na obóz"
            className="absolute inset-0 h-full w-full object-cover object-[center_38%] transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/10 to-dark-lighter/75 pointer-events-none"
            aria-hidden
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1.5 sm:gap-2 px-5 py-4 sm:px-7 sm:py-5 md:px-9 md:py-6 min-w-0">
          <p className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm">Dla rodziców</p>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-2xl">
            FAQ, dokumenty do pobrania i praktyczne porady przed wyjazdem dziecka na obóz.
          </p>
          <span className="inline-flex items-center gap-2 text-primary text-sm sm:text-base font-bold mt-2 sm:mt-3 group-hover:gap-3 transition-all">
            Strefa Rodzica
            <ArrowRight size={18} className="shrink-0 sm:w-5 sm:h-5" aria-hidden />
          </span>
        </div>
      </Link>
    </aside>
  );
}
