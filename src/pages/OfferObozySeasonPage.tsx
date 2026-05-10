import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WINTER_OFFERS } from '../data/winterOffers';

const ZIMA = {
  title: 'Obozy i kolonie zimowe',
  subtitle: 'Oferta zimowa',
  bg: '/utils/obozy-kolonie/quadzima.png',
} as const;

export default function OfferObozySeasonPage() {
  const { season } = useParams<{ season: string }>();

  if (season !== 'zima') {
    return <Navigate to="/oferta/obozy-i-kolonie" replace />;
  }

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="relative min-h-[45vh] md:min-h-[50vh] flex flex-col justify-end overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ZIMA.bg})` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-800/18 via-slate-800/10 to-transparent" aria-hidden />
          <div className="app-photo-scrim" aria-hidden />

          <div className="relative z-10 max-w-4xl mx-auto px-6 pb-14 pt-28 w-full">
            <nav className="text-sm text-white/60 mb-6">
              <Link to="/oferta" className="hover:text-primary transition-colors">
                Oferta
              </Link>
              <span className="mx-2">/</span>
              <Link to="/oferta/obozy-i-kolonie" className="hover:text-primary transition-colors">
                Obozy i kolonie
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">Zima</span>
            </nav>
            <p className="text-primary font-bold uppercase tracking-widest mb-3 text-sm md:text-base">{ZIMA.subtitle}</p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-extrabold font-display text-white leading-tight drop-shadow-lg"
            >
              {ZIMA.title}
            </motion.h1>
          </div>
        </section>

        <section className="section-padding bg-dark border-b border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
            <p className="text-lg md:text-xl text-white/85 leading-relaxed">
              Fundacja JA YHYMM… Integracja, Sport, Turystyka, Wypoczynek jest właścicielem marki{' '}
              <a
                href="https://najlepszeobozy.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                NajlepszeObozy.pl
              </a>
              . To jedyna tak złożona oferta aktywnych obozów młodzieżowych na południu Polski.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white pt-2">
              Sprawdź naszą ofertę obozów i kolonii zimowych
            </h2>
          </div>
        </section>

        <section className="section-padding bg-dark-lighter border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-6 md:mb-10 text-center">
              Obozy zimowe
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {WINTER_OFFERS.map((offer, i) => (
                <motion.div
                  key={offer.slug}
                  className="w-full min-w-0 sm:w-[calc((100%-1.5rem)/2)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={`/oferta/obozy-i-kolonie/zima/${offer.slug}`}
                    className="group relative block aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-white/10 bg-dark/40 transition-colors duration-300 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <img
                      src={offer.imageSrc}
                      alt={offer.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="app-photo-scrim-card opacity-95" aria-hidden />
                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-6">
                      <span className="text-lg md:text-xl font-bold font-display text-white leading-snug drop-shadow-md group-hover:text-primary transition-colors">
                        {offer.title}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                        Szczegóły
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-4xl mx-auto px-6 flex flex-wrap gap-6">
            <div className="mt-0 flex flex-wrap gap-6">
              <Link
                to="/oferta/obozy-i-kolonie"
                className="text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
              >
                ← Obozy i kolonie
              </Link>
              <Link to="/oferta" className="text-sm text-white/50 hover:text-primary transition-colors">
                Przegląd oferty
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
