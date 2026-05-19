

import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Bus, 
  Tent, 
  GraduationCap, 
  Shield, 
  Users, 
  PartyPopper,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GoldenBorderSection } from '../components/GoldenBorderSection';
import { PartnerLogosMarquee } from '../components/PartnerLogosMarquee';
import { NEWS_ARTICLES } from '../data/newsArticles';


const HERO_SLIDES = [
  {
    src: '/images/home/hero-slide-sunset.png',
    alt: 'Zachód słońca na Jurze — skały i panorama nad lasem',
  },
  { src: '/utils/quady-popr.png', alt: 'Quady i motocross — JA YHYMM' },
  {
    src: '/images/eventy/imprezy-firmowe-karta.png',
    alt: 'Imprezy integracyjne i firmowe — JA YHYMM',
  },
  {
    src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-1.png',
    alt: 'Jura Off-Road Camp 4×4 — uczestnicy przy terenowym 4×4 w lesie',
  },
  {
    src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-1.png',
    alt: 'Jura Multi Camp — spływ kajakowy',
  },
] as const;

/** Kadrowanie tła per slajd (np. lekko w górę). */
const HERO_SLIDE_BACKGROUND_POSITION: Partial<Record<(typeof HERO_SLIDES)[number]['src'], string>> = {
  '/images/eventy/imprezy-firmowe-karta.png': 'center 28%',
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [slideIndex, setSlideIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20"
    >
      <motion.div 
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        className="absolute inset-0 z-0"
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={HERO_SLIDES[slideIndex].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 bg-cover scale-110"
            style={{
              backgroundImage: `url(${HERO_SLIDES[slideIndex].src})`,
              backgroundPosition: HERO_SLIDE_BACKGROUND_POSITION[HERO_SLIDES[slideIndex].src] ?? 'center center',
            }}
            aria-hidden
          />
        </AnimatePresence>
        <div className="app-photo-scrim" aria-hidden />
      </motion.div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-3 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={HERO_SLIDES[i].src}
              type="button"
              aria-label={`Slajd ${i + 1}`}
              aria-current={i === slideIndex}
              onClick={() => setSlideIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === slideIndex ? 'w-8 bg-primary' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            Eventy inne niż wszystkie
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 uppercase font-sophisticated tracking-tight text-white">
            EVENTY, IMPREZY FIRMOWE, <br className="hidden md:block" />
            OBOZY I KOLONIE, WYCIECZKI SZKOLNE, <br className="hidden md:block" />
            OBOZY dla klas mundurowych, <br className="hidden md:block" />
            WYJAZDY STUDENCKIE
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-12 font-sophisticated font-light tracking-wide">
            Z przyjemnością to wszystko zorganizujemy <span className="text-primary font-bold">DLA CIEBIE!</span>
          </p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary font-display"
        >
          Sprawdź naszą ofertę
        </motion.button>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <GoldenBorderSection
      id="o-nas"
      surface="dark-lighter"
      label="O nas"
      title={
        <>
          Pasja, Ludzie,
          <br />
          Doświadczenie.
        </>
      }
      description="Przy każdym z przedsięwzięć, których się podejmujemy pracuje sztab ludzi, gdzie każdy z nich jest fachowcem w swojej dziedzinie, a współpraca pomiędzy nimi przebiega w atmosferze pełnego zrozumienia i zaufania."
      footerAction={
        <Link to="/o-nas" className="btn-primary inline-block whitespace-nowrap px-5 text-sm sm:px-8 sm:text-base">
          Poznaj nas bliżej
        </Link>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group max-w-3xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary">
          <img
            src="/images/o-nas/kadra.png"
            alt="Zespół JA YHYMM nad wodą"
            className="relative w-full h-auto block transition-transform duration-700 group-hover:scale-[1.04]"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </GoldenBorderSection>
  );
};

const Offer = () => {
  const offers = [
    {
      title: 'Obozy i kolonie',
      to: '/oferta/obozy-i-kolonie',
      img: '/utils/obozy-kolonie/obozy-hero.png',
      icon: <Tent className="text-primary" size={32} />,
    },
    {
      title: 'Wycieczki szkolne',
      to: '/oferta/wycieczki-szkolne',
      img: '/images/wycieczki-szkolne/wycieczki-szkolne-karta.png',
      icon: <GraduationCap className="text-primary" size={32} />,
    },
    {
      title: 'Obozy dla klas mundurowych',
      to: '/oferta/obozy-dla-klas-mundurowych',
      img: '/utils/mili.jpg',
      icon: <Shield className="text-primary" size={32} />,
    },
    {
      title: 'Imprezy integracyjne, firmowe',
      to: '/oferta/eventy',
      img: '/images/eventy/imprezy-firmowe-karta.png',
      icon: <Users className="text-primary" size={32} />,
    },
    {
      title: 'Wieczory kawalerskie i panieńskie',
      to: '/oferta/wieczory-kawalerskie-i-panienskie',
      img: '/images/wieczory-kawalerskie/wieczory-kawalerskie-karta.png',
      icon: <PartyPopper className="text-primary" size={32} />,
    },
    {
      title: 'Wyjazdy jedno i wielodniowe',
      to: '/oferta/transport',
      img: '/images/wyjazdy/wyjazdy-jedno-wielodniowe-karta.png',
      icon: <Bus className="text-primary" size={32} />,
    },
  ];

  return (
    <GoldenBorderSection
      id="oferta"
      label="Nasza Oferta"
      title="Wybierz swoją przygodę"
      footerAction={
        <Link to="/oferta" className="btn-primary inline-block">
          Sprawdź pełną ofertę
        </Link>
      }
    >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offers.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                className="group relative block overflow-hidden rounded-3xl bg-dark-lighter border-2 border-white/10 transition-colors duration-300 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="app-photo-scrim-card opacity-95" aria-hidden />
                <div
                  className="absolute inset-x-0 bottom-0 h-44 md:h-52 pointer-events-none z-[1]"
                  style={{
                    background:
                      'linear-gradient(to top, color-mix(in oklab, var(--color-dark) 82%, transparent) 0%, color-mix(in oklab, var(--color-dark) 38%, transparent) 42%, transparent 100%)',
                  }}
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 z-10 w-full p-8">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-2xl font-bold mb-6 leading-tight text-white">{item.title}</h4>
                  <span className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest">
                    Sprawdź szczegóły
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
    </GoldenBorderSection>
  );
};

const News = () => {
  return (
    <GoldenBorderSection
      id="aktualnosci"
      surface="dark-lighter"
      label="Aktualności"
      title="Co u nas słychać?"
      footerAction={
        <Link to="/aktualnosci" className="btn-primary inline-block">
          Wszystkie wpisy
        </Link>
      }
    >
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {NEWS_ARTICLES.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/aktualnosci#${post.slug}`}
                className="group block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-lighter rounded-2xl"
              >
                <div className="aspect-video overflow-hidden rounded-2xl mb-6 border-2 border-transparent transition-colors duration-300 group-hover:border-primary">
                  <img
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">{post.date}</span>
                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
    </GoldenBorderSection>
  );
};

const Reviews = () => {
  const clientReviews = [
    {
      name: 'Marek Wiśniewski',
      role: 'Dyrektor HR',
      text: 'Najlepsza integracja firmowa na jakiej byliśmy. Profesjonalizm w każdym calu, świetna kadra i emocje, których nie zapomnimy.',
      rating: 5
    },
    {
      name: 'Anna Kowalska',
      role: 'Rodzic',
      text: 'Mój syn wrócił z obozu mundurowego odmieniony. Większa dyscyplina, pewność siebie i masa nowych umiejętności. Polecam każdemu!',
      rating: 5
    },
    {
      name: 'Tomasz Nowak',
      role: 'Nauczyciel',
      text: 'Wycieczka szkolna zorganizowana perfekcyjnie. Dzieciaki zachwycone, a my jako opiekunowie mogliśmy spać spokojnie.',
      rating: 5
    }
  ];

  const companyReviews = [
    {
      name: 'Vivasto',
      role: 'Rekomendacja',
      text: 'Rekomenduję P.H.U JA YHYMM... Integracja Sport Turystyka Wypoczynek jako solidną, wiarygodną, oraz rzetelną w pełni profesjonalną firmę.',
      rating: 5
    },
    {
      name: 'Moraj',
      role: 'Rekomendacja',
      text: 'Z pełną odpowiedzialnością polecamy firmę jako organizatora spotkań integracyjnych. JA YHYMM... to firma która w sposób zabawny, bezpieczny, ale przede wszystkim fachowy zapewnia niezapomnianą rozrywkę.',
      rating: 5
    },
    {
      name: 'Transacta',
      role: 'Rekomendacja',
      text: 'Firma P.H.U JA YHYMM...Integracja Sport Turystyka Wypoczynek kompleksowo zorganizowała wyjazd integracyjny dla pracowników szczebla administracyjnego naszej firmy.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Opinie</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold uppercase font-display">Zaufali nam</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clientReviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic text-white/80 leading-relaxed mb-8">"{review.text}"</p>
              </div>
              <div>
                <p className="font-bold text-lg">{review.name}</p>
                <p className="text-primary text-sm uppercase tracking-widest">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <PartnerLogosMarquee />

        <div className="text-center mb-10">
          <h4 className="text-2xl md:text-3xl font-extrabold uppercase font-display text-white">Firmy</h4>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {companyReviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic text-white/80 leading-relaxed mb-8">"{review.text}"</p>
              </div>
              <div>
                <p className="font-bold text-lg">{review.name}</p>
                <p className="text-primary text-sm uppercase tracking-widest">{review.role}</p>
                <Link
                  to="/o-nas#rekomendacje"
                  className="inline-flex items-center gap-2 mt-4 text-white hover:text-primary transition-colors"
                >
                  Czytaj dalej...
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Offer />
      <News />
      <Reviews />
      <Footer />
    </div>
  );
}
