import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Bus, GraduationCap, Hotel, PartyPopper, Settings, Shield, Tent, Users, Wrench, type LucideIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { OFFER_SUBPAGES } from '../data/offerPages';

const OFFER_CARD_MEDIA: Record<string, { img: string; icon: LucideIcon }> = {
  'obozy-i-kolonie': { img: '/utils/obozy-kolonie/obozy-hero.png', icon: Tent },
  'obozy-dla-klas-mundurowych': { img: '/utils/mili.jpg', icon: Shield },
  'wycieczki-szkolne': { img: '/images/wycieczki-szkolne/wycieczki-szkolne-karta.png', icon: GraduationCap },
  eventy: { img: '/images/eventy/imprezy-firmowe-karta.png', icon: Users },
  'wieczory-kawalerskie-i-panienskie': { img: '/images/wieczory-kawalerskie/wieczory-kawalerskie-karta.png', icon: PartyPopper },
  'wynajem-sprzetu': { img: '/utils/quady-popr.png', icon: Wrench },
  transport: { img: '/images/wyjazdy/wyjazdy-jedno-wielodniowe-karta.png', icon: Bus },
  'szkolenia-i-kursy': { img: '/images/szkolenia/szkolenia1.png', icon: BadgeCheck },
  'baza-noclegowa': { img: '/utils/oferta-letnia/jura-military-camp/gallery/lesna-baza-1.png', icon: Hotel },
  'baza-serwisowa': { img: '/images/serwis/serwis.png', icon: Settings },
};

export default function OfferIndexPage() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="section-padding bg-dark border-b border-white/5">
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
                (() => {
                  const media = OFFER_CARD_MEDIA[item.slug] ?? OFFER_CARD_MEDIA['obozy-i-kolonie'];
                  const Icon = media.icon;

                  return (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        to={`/oferta/${item.slug}`}
                        className="group relative block h-full overflow-hidden border-2 border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-primary"
                      >
                        <img
                          src={media.img}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/55" />

                        <div className="relative z-10">
                          <div className="mb-4 inline-flex rounded-xl bg-dark/40 p-3 border border-white/15">
                            <Icon className="text-primary" size={24} />
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold font-display text-white mb-3 group-hover:text-primary transition-colors">
                            {item.title}
                          </h2>
                          <p className="text-white/80 leading-relaxed text-sm md:text-base mb-6">{item.lead}</p>
                          <span className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest">
                            Szczegóły
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })()
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
