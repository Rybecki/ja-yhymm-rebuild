import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { teamMembers } from '../data/team';

const RECOMMENDATIONS = Array.from({ length: 13 }, (_, i) => ({
  src: `/utils/rekomendacje/rekomendacje-${i + 1}.png`,
  alt: `Rekomendacja od klienta — dokument ${i + 1}`,
}));

export default function AboutPage() {
  const { hash } = useLocation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(t);
  }, [hash]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="section-padding bg-dark-lighter border-b border-white/5">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">O nas</h1>
            <p className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
              Pasja, ludzie, doświadczenie
            </p>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md border-2 border-primary p-8 md:p-12 rounded-[2rem]"
            >
              <div className="space-y-8 text-lg text-white/80 leading-relaxed">
                <p>
                  Przy każdym z przedsięwzięć, których się podejmujemy pracuje sztab ludzi, gdzie każdy z nich jest fachowcem w swojej dziedzinie, a współpraca pomiędzy nimi przebiega w atmosferze pełnego zrozumienia i zaufania.
                </p>
                <p>
                  Jesteśmy grupą osób, którą jeżeli napotkacie kiedykolwiek na swojej drodze z pewnością zostaniecie „zarażeni” właśnie tą pasją, i pozytywnym podejściem do wszystkiego czym się zajmujemy.
                </p>
                <p>
                  Jeżeli chcesz zorganizować imprezę integracyjną, biwak, piknik, wycieczkę, obóz, lub wakacje o typowo rekreacyjnym charakterze…{' '}
                  <span className="text-primary font-semibold">POLECAMY SIĘ JAK NAJBARDZIEJ.</span>
                  <br />
                  Ale jeżeli chcesz aby to wszystko miało charakter niezwykłej przygody, wyzwania i było pełne adrenaliny…{' '}
                  <span className="text-primary font-semibold">POLECAMY SIĘ TYM BARDZIEJ!</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="nasz-zespol" className="section-padding bg-dark border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14 md:mb-16">
              <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Nasz zespół</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white">Ludzie JA YHYMM</h3>
            </div>

            <div className="flex flex-col divide-y divide-primary/25">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45 }}
                  className={`flex flex-col gap-8 md:gap-10 md:items-start py-12 md:py-16 first:pt-0 last:pb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  <div className="w-full md:w-[min(100%,280px)] lg:w-72 shrink-0 mx-auto md:mx-0">
                    <div className="rounded-2xl overflow-hidden border-2 border-white/10 bg-white/5 shadow-xl transition-colors duration-300 hover:border-primary">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl md:text-2xl font-bold font-display text-white mb-5">{member.name}</h4>
                    <div className="space-y-4 text-base text-white/75 leading-relaxed">
                      {member.paragraphs.map((paragraph, pi) => (
                        <p key={pi}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="rekomendacje" className="section-padding bg-dark-lighter border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Rekomendacje</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white">Od naszych klientów</h3>
              <p className="mt-4 text-white/50 max-w-2xl mx-auto text-sm md:text-base">
                Listy referencyjne i podziękowania
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {RECOMMENDATIONS.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setLightbox(index)}
                  className="group text-left rounded-xl overflow-hidden border-2 border-white/10 bg-dark/40 transition-colors duration-300 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-lighter"
                >
                  <div className="h-36 sm:h-40 md:h-44 overflow-hidden bg-white/5">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-dark/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.button
              type="button"
              className="absolute top-6 right-6 z-[101] p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              aria-label="Zamknij"
            >
              <X size={28} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-5xl w-full overflow-auto rounded-2xl border-2 border-primary shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={RECOMMENDATIONS[lightbox].src}
                alt={RECOMMENDATIONS[lightbox].alt}
                className="w-full h-auto object-contain bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
