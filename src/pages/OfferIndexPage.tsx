import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { OFFER_SUBPAGES } from '../data/offerPages';

export default function OfferIndexPage() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="section-padding bg-dark-lighter border-b border-white/5">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Oferta</h1>
            <p className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight mb-6">
              Wybierz kategorię
            </p>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Poniżej znajdziesz zakres usług JA YHYMM — każdą realizację dopasowujemy do grupy, terminu i miejsca.
            </p>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {OFFER_SUBPAGES.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    to={`/oferta/${item.slug}`}
                    className="group block h-full bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-primary"
                  >
                    <h2 className="text-xl md:text-2xl font-bold font-display text-white mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-white/65 leading-relaxed text-sm md:text-base mb-6">{item.lead}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest">
                      Szczegóły
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
