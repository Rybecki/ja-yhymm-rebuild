import { useState, type MouseEvent } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SummerOfferDetailLayout } from '../components/SummerOfferDetailLayout';
import { OfferSectionTitle } from '../components/OfferSectionTitle';
import { getSummerOfferBySlug, summerOfferImageSrc } from '../data/summerOffers';
import { getSummerOfferDetail } from '../data/summerOfferDetails';
import { CAMPS_HERO_BG_POSITION, CAMPS_HERO_CONTENT, CAMPS_HERO_SECTION } from '../constants/campOfferHero';
import { PhotoBottomScrim } from '../components/PhotoBottomScrim';

export default function OfferLatoDetailPage() {
  const { offerSlug } = useParams<{ offerSlug: string }>();
  const found = getSummerOfferBySlug(offerSlug);
  const detail = getSummerOfferDetail(offerSlug);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 18;
    const y = (clientY / innerHeight - 0.5) * 18;
    setMousePos({ x, y });
  };

  if (!found) {
    return <Navigate to="/oferta/obozy-i-kolonie/lato" replace />;
  }

  const { offer, section } = found;
  const heroSrc =
    detail?.heroImage?.src ??
    (detail?.gallery?.length ? detail.gallery[detail.gallery.length - 1].src : undefined) ??
    summerOfferImageSrc(offer.imageKey);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section
          onMouseMove={handleHeroMouseMove}
          className={`${CAMPS_HERO_SECTION} border-b border-white/[0.06]`}
        >
          <motion.div
            animate={{ x: mousePos.x, y: mousePos.y }}
            transition={{ type: 'spring', damping: 32, stiffness: 120 }}
            className="absolute -inset-[10%] z-0"
          >
            <div
              className="absolute inset-0 bg-cover scale-[1.12]"
              style={{
                backgroundImage: `url(${heroSrc})`,
                backgroundPosition: detail?.heroBackgroundPosition ?? CAMPS_HERO_BG_POSITION,
              }}
            />
          </motion.div>
          <div className="app-photo-scrim" aria-hidden />
          <PhotoBottomScrim />

          <div className={CAMPS_HERO_CONTENT}>
            <nav className="text-sm text-white/65 mb-6 flex flex-wrap gap-x-2 gap-y-1">
              <Link to="/oferta" className="hover:text-primary transition-colors">
                Oferta
              </Link>
              <span>/</span>
              <Link to="/oferta/obozy-i-kolonie" className="hover:text-primary transition-colors">
                Obozy i kolonie
              </Link>
              <span>/</span>
              <Link to="/oferta/obozy-i-kolonie/lato" className="hover:text-primary transition-colors">
                Lato
              </Link>
              <span>/</span>
              <span className="text-white/90">{offer.title}</span>
            </nav>
            <p className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2">{section.title}</p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-extrabold font-display text-white leading-tight drop-shadow-lg"
            >
              {offer.title}
            </motion.h1>
          </div>
        </section>

        {detail ? (
          <SummerOfferDetailLayout
            detail={detail}
            tileImage={{ src: summerOfferImageSrc(offer.imageKey), alt: `${offer.title} — zdjęcie obozu` }}
          />
        ) : (
          <>
            <section className="py-14 md:py-16 bg-dark border-b border-white/[0.06]">
              <div className="max-w-3xl xl:max-w-4xl mx-auto px-6 sm:px-8">
                <p className="text-white/75 leading-relaxed text-lg">
                  Szczegółowy opis wyjazdu, terminów i zapisów pojawi się wkrótce. Zapytaj o ten obóz — przygotujemy propozycję pod Twoją grupę.
                </p>
                <p className="mt-8 text-white/50 text-sm border-t border-white/10 pt-8">
                  <a href="mailto:biuro@ja-yhymm.pl" className="text-primary hover:underline">
                    biuro@ja-yhymm.pl
                  </a>
                  {' · '}
                  <a href="tel:794997714" className="text-primary hover:underline">
                    794 997 714
                  </a>
                </p>
              </div>
            </section>

            <div
              className="pointer-events-none h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-80"
              aria-hidden
            />

            <section className="py-14 md:py-16 bg-dark-lighter border-b border-white/[0.06]">
              <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8">
                <OfferSectionTitle>Galeria</OfferSectionTitle>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.figure
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden border-2 border-white/10 bg-white/5 transition-all duration-300 hover:border-primary/45"
                  >
                    <img
                      src={heroSrc}
                      alt={offer.title}
                      className="w-full h-auto object-cover aspect-[4/3] md:aspect-video"
                    />
                  </motion.figure>
                  <p className="sm:col-span-2 text-center text-white/45 text-sm">
                    Kolejne zdjęcia z tego wyjazdu dodamy wraz z rozwojem strony.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-14 md:py-16 bg-dark">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <Link
                  to="/oferta/obozy-i-kolonie/lato"
                  className="inline-flex text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
                >
                  ← Oferta letnia
                </Link>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
