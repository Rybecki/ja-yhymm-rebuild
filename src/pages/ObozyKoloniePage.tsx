import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GoldenBorderSection } from '../components/GoldenBorderSection';
import { PhotoBottomScrim } from '../components/PhotoBottomScrim';
import { getOfferBySlug } from '../data/offerPages';

const HERO_BG = '/utils/obozy-kolonie/obozy-hero.png';
const LATO_BG = '/utils/obozy-kolonie/lato-user.png';
const ZIMA_BG = '/utils/obozy-kolonie/zima-user.png';

export default function ObozyKoloniePage() {
  const page = getOfferBySlug('obozy-i-kolonie');
  if (!page) return null;

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="relative min-h-[52vh] md:min-h-[58vh] flex flex-col justify-end overflow-hidden border-b border-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${HERO_BG})`, backgroundPosition: 'center 47%' }}
          />
          <div className="app-photo-scrim" aria-hidden />
          <PhotoBottomScrim />
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

        <GoldenBorderSection
          label="Wybierz sezon"
          title="Każda pora roku to u nas inna przygoda"
          description="Poniżej przejdziesz do szczegółowej oferty letniej albo zimowej — wybierz to, co pasuje Tobie lub Twojej grupie."
          maxWidthClassName="max-w-3xl"
          className="border-b border-white/5"
        >
          <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
              <Link
                to="/oferta/obozy-i-kolonie/lato"
                className="group relative flex min-h-[340px] sm:min-h-0 sm:aspect-[4/5] overflow-hidden rounded-3xl border-2 border-white/10 bg-dark/50 transition-colors duration-300 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div
                  className="absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${LATO_BG})`,
                    backgroundPosition: 'center 38%',
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/22 via-orange-400/10 to-transparent" aria-hidden />
                <div className="app-photo-scrim-card opacity-95" aria-hidden />
                <PhotoBottomScrim card />
                <div className="relative z-10 mt-auto flex w-full flex-col gap-4 p-6 md:p-7">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200/95">Sezon letni</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold font-display text-white drop-shadow-lg">Lato</h2>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-md">
                    Słońce, woda, plaża i energia do granic — obozy i kolonie, które zapamiętasz na lata.
                  </p>
                  <span className="inline-flex w-fit items-center gap-2 bg-primary text-dark font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full shadow-[0_0_24px_rgba(247,199,59,0.35)] group-hover:scale-[1.03] transition-transform">
                    Oferta letnia
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>

              <Link
                to="/oferta/obozy-i-kolonie/zima"
                className="group relative flex min-h-[340px] sm:min-h-0 sm:aspect-[4/5] overflow-hidden rounded-3xl border-2 border-white/10 bg-dark/50 transition-colors duration-300 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div
                  className="absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${ZIMA_BG})`,
                    backgroundPosition: 'center 32%',
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-800/26 via-slate-800/14 to-transparent" aria-hidden />
                <div className="app-photo-scrim-card opacity-95" aria-hidden />
                <PhotoBottomScrim card />
                <div className="relative z-10 mt-auto flex w-full flex-col gap-4 p-6 md:p-7">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-200/95">Sezon zimowy</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold font-display text-white drop-shadow-lg">Zima</h2>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-md">
                    Śnieg, quady i zimowa adrenalina — wyjazdy, które rozgrzeją nawet mróz.
                  </p>
                  <span className="inline-flex w-fit items-center gap-2 bg-primary text-dark font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full shadow-[0_0_24px_rgba(247,199,59,0.25)] group-hover:scale-[1.03] transition-transform">
                    Oferta zimowa
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
          </motion.div>
        </GoldenBorderSection>

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
