import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Download, X } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PhotoBottomScrim } from '../components/PhotoBottomScrim';
import { ALL_REGULATIONS, type Regulation } from '../data/regulations';

const REGULAMINY_HERO_SRC = '/utils/dla-ciebie/regulaminy-hero.png';

export default function ContactSubpage() {
  const [activeRegulation, setActiveRegulation] = useState<Regulation | null>(null);

  useEffect(() => {
    if (!activeRegulation) {
      document.body.style.overflow = '';
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveRegulation(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeRegulation]);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main>
        <section className="section-padding border-b border-white/5 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${REGULAMINY_HERO_SRC})`,
              backgroundPosition: 'center center',
            }}
            aria-hidden
          />
          <div className="app-photo-scrim" aria-hidden />
          <PhotoBottomScrim />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <nav className="text-sm text-white/70 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <Link to="/dla-ciebie/formularze" className="hover:text-primary transition-colors text-white/80">
                Dla Ciebie
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Regulaminy</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Dla Ciebie</h1>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight drop-shadow-lg"
            >
              Regulaminy
            </motion.h2>
          </div>
        </section>
        <section className="section-padding bg-dark">
          <div className="max-w-5xl mx-auto px-6">
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10">
              <p className="text-white/75 leading-relaxed text-lg mb-6">
                Wybierz regulamin, aby otworzyć podgląd w modalu. Na dole każdego regulaminu znajdziesz przycisk pobrania dokumentu PDF.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {ALL_REGULATIONS.map((regulation) => (
                  <button
                    key={regulation.file}
                    type="button"
                    onClick={() => setActiveRegulation(regulation)}
                    className="rounded-2xl border border-primary/50 bg-white/5 px-5 py-4 text-left text-white font-semibold hover:bg-primary/10 hover:border-primary transition-colors"
                  >
                    {regulation.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeRegulation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveRegulation(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl rounded-3xl border border-white/15 bg-dark-lighter max-h-[85vh] overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10">
                <h3 className="text-lg md:text-xl font-bold text-primary">{activeRegulation.title}</h3>
                <button
                  type="button"
                  onClick={() => setActiveRegulation(null)}
                  className="rounded-full border border-white/20 p-2 text-white/80 hover:text-white hover:border-primary transition-colors"
                  aria-label="Zamknij modal"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-6 py-5 overflow-y-auto max-h-[calc(85vh-10rem)] text-white/80 leading-relaxed">
                {activeRegulation.fullText ? (
                  <pre className="whitespace-pre-wrap font-sans text-sm md:text-base">{activeRegulation.fullText}</pre>
                ) : (
                  <div className="space-y-3">
                    {activeRegulation.content?.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
              <div className="px-6 py-4 border-t border-white/10">
                <a
                  href={activeRegulation.file}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-dark transition-colors"
                >
                  <Download size={16} />
                  Pobierz dokument PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
