import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Snowflake, Sun } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { getOfferBySlug } from '../data/offerPages';

const HERO_BG = '/utils/obozy-kolonie/obozy-hero.png';
const LATO_BG = '/utils/obozy-kolonie/lato.png';
const ZIMA_BG = '/utils/obozy-kolonie/quadzima.png';

export default function ObozyKoloniePage() {
  const page = getOfferBySlug('obozy-i-kolonie');
  if (!page) return null;

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        {}
        <section className="relative min-h-[52vh] md:min-h-[58vh] flex flex-col justify-end overflow-hidden border-b border-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/65 to-dark/25" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 md:pb-20 pt-32 w-full">
            <nav className="text-sm text-white/60 mb-6">
              <Link to="/oferta" className="hover:text-primary transition-colors">
                Oferta
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">{page.title}</span>
            </nav>
            <p className="text-primary font-bold uppercase tracking-widest mb-3 text-sm md:text-base">Oferta</p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-extrabold font-display text-white leading-tight drop-shadow-lg"
            >
              {page.title}
            </motion.h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed drop-shadow-md">
              {page.lead}
            </p>
          </div>
        </section>

        {}
        <section className="section-padding bg-dark border-b border-white/5">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
              Wybierz sezon
            </h2>
            <p className="text-xl md:text-2xl font-display font-semibold text-white leading-snug mb-5">
              Każda pora roku to u nas inna przygoda
            </p>
            <p className="text-white/60 leading-relaxed text-base md:text-lg max-w-xl mx-auto">
              Poniżej przejdziesz do szczegółowej oferty letniej albo zimowej — wybierz to, co pasuje Tobie lub Twojej grupie.
            </p>
            <div className="mt-10 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden />
          </div>
        </section>

        {}
        <section className="relative min-h-[420px] md:min-h-[480px] flex items-stretch overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${LATO_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/35 via-orange-500/15 to-dark/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-amber-900/20" />

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-amber-200/95 mb-4">
                <Sun className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                <span className="text-sm font-bold uppercase tracking-[0.25em]">Sezon letni</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white drop-shadow-lg mb-4">Lato</h2>
              <p className="text-white/90 text-lg leading-relaxed drop-shadow-md">
                Słońce, woda, plaża i energia do granic — obozy i kolonie, które zapamiętasz na lata.
              </p>
            </div>
            <Link
              to="/oferta/obozy-i-kolonie/lato"
              className="shrink-0 inline-flex items-center gap-3 bg-primary text-dark font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full shadow-[0_0_30px_rgba(247,199,59,0.35)] hover:scale-105 transition-transform"
            >
              Oferta letnia
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {}
        <div className="relative h-16 md:h-20 bg-dark overflow-hidden flex items-center justify-center border-y border-white/5">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="relative flex items-center gap-6 md:gap-10 px-6">
            <Sun className="w-5 h-5 text-amber-400/80" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">sezon</span>
            <Snowflake className="w-5 h-5 text-sky-300/80" />
          </div>
        </div>

        {}
        <section className="relative min-h-[420px] md:min-h-[480px] flex items-stretch overflow-hidden group border-b border-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${ZIMA_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-slate-900/40 to-dark/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-sky-950/30 to-transparent" />

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-sky-200/95 mb-4">
                <Snowflake className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                <span className="text-sm font-bold uppercase tracking-[0.25em]">Sezon zimowy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white drop-shadow-lg mb-4">Zima</h2>
              <p className="text-white/90 text-lg leading-relaxed drop-shadow-md">
                Śnieg, quady i zimowa adrenalina — wyjazdy, które rozgrzeją nawet mróz.
              </p>
            </div>
            <Link
              to="/oferta/obozy-i-kolonie/zima"
              className="shrink-0 inline-flex items-center gap-3 bg-primary text-dark font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full shadow-[0_0_30px_rgba(247,199,59,0.25)] hover:scale-105 transition-transform"
            >
              Oferta zimowa
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Link
              to="/oferta"
              className="inline-flex text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
            >
              ← Przegląd oferty
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
