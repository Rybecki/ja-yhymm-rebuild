import { useState, type MouseEvent } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SummerOfferDetailLayout } from '../components/SummerOfferDetailLayout';
import { getWinterOfferBySlug, getWinterOfferDetail } from '../data/winterOffers';

export default function OfferZimaDetailPage() {
  const { offerSlug } = useParams<{ offerSlug: string }>();
  const offer = getWinterOfferBySlug(offerSlug);
  const detail = getWinterOfferDetail(offerSlug);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 18;
    const y = (clientY / innerHeight - 0.5) * 18;
    setMousePos({ x, y });
  };

  if (!offer) {
    return <Navigate to="/oferta/obozy-i-kolonie/zima" replace />;
  }

  const heroSrc = offer.imageSrc;

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section
          onMouseMove={handleHeroMouseMove}
          className="relative min-h-[42vh] md:min-h-[48vh] flex flex-col justify-end overflow-hidden border-b border-white/[0.06]"
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
                backgroundPosition: 'center 28%',
              }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/30 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/55 to-transparent z-[1]" />

          <div className="relative z-10 max-w-4xl xl:max-w-5xl mx-auto px-6 sm:px-8 pb-12 md:pb-16 pt-28 w-full">
            <nav className="text-sm text-white/65 mb-6 flex flex-wrap gap-x-2 gap-y-1">
              <Link to="/oferta" className="hover:text-primary transition-colors">
                Oferta
              </Link>
              <span>/</span>
              <Link to="/oferta/obozy-i-kolonie" className="hover:text-primary transition-colors">
                Obozy i kolonie
              </Link>
              <span>/</span>
              <Link to="/oferta/obozy-i-kolonie/zima" className="hover:text-primary transition-colors">
                Zima
              </Link>
              <span>/</span>
              <span className="text-white/90">{offer.title}</span>
            </nav>
            <p className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Obozy zimowe</p>
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
            tileImage={{ src: heroSrc, alt: `Zdjecie tytulowe - ${offer.title}` }}
            backTo="/oferta/obozy-i-kolonie/zima"
            backLabel="Powrót do oferty zimowej"
          />
        ) : (
          <>
            <section className="py-14 md:py-16 bg-dark border-b border-white/[0.06]">
              <div className="max-w-3xl xl:max-w-4xl mx-auto px-6 sm:px-8">
                <p className="text-white/75 leading-relaxed text-lg">
                  Szczegolowy opis wyjazdu, terminow i zapisow pojawi sie wkrotce. Zapytaj o ten oboz - przygotujemy
                  propozycje pod Twoja grupe.
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

            <section className="py-14 md:py-16 bg-dark">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <Link
                  to="/oferta/obozy-i-kolonie/zima"
                  className="inline-flex text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
                >
                  ← Oferta zimowa
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
