import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Bus, GraduationCap, Hotel, PartyPopper, Settings, Shield, Tent, Users, Wrench, type LucideIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GoldenBorderSection } from '../components/GoldenBorderSection';
import { OFFER_SUBPAGES } from '../data/offerPages';

const HERO_BG = '/images/oferta/oferta-hero.png';

const OFFER_CARD_MEDIA: Record<string, { img: string; icon: LucideIcon }> = {
  'obozy-i-kolonie': { img: '/utils/obozy-kolonie/obozy-hero.png', icon: Tent },
  'obozy-dla-klas-mundurowych': { img: '/utils/mili.jpg', icon: Shield },
  'wycieczki-szkolne': { img: '/images/wycieczki-szkolne/wycieczki-szkolne-karta.png', icon: GraduationCap },
  eventy: { img: '/images/eventy/imprezy-firmowe-karta.png', icon: Users },
  'wieczory-kawalerskie-i-panienskie': { img: '/images/wieczory-kawalerskie/wieczory-kawalerskie-karta.png', icon: PartyPopper },
  'wynajem-sprzetu': { img: '/images/wynajem-sprzetu/wynajem-sprzetu-hero.png', icon: Wrench },
  transport: { img: '/images/wyjazdy/wyjazdy-jedno-wielodniowe-karta.png', icon: Bus },
  'szkolenia-i-kursy': { img: '/images/szkolenia/szkolenia1.png', icon: BadgeCheck },
  'baza-noclegowa': { img: '/images/baza-noclegowa/gory-gorzkowskie.png', icon: Hotel },
  'baza-serwisowa': { img: '/images/serwis/serwis.png', icon: Settings },
};

export default function OfferIndexPage() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="relative min-h-[42vh] md:min-h-[48vh] flex flex-col justify-end overflow-hidden border-b border-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${HERO_BG})`, backgroundPosition: 'center 65%' }}
            aria-hidden
          />
          <motion.div className="app-photo-scrim" aria-hidden />
        </section>

        <GoldenBorderSection
          label="Oferta"
          title="Wybierz kategorię"
          description="Poniżej znajdziesz zakres usług JA YHYMM — każdą realizację dopasowujemy do grupy, terminu i miejsca."
          maxWidthClassName="max-w-6xl"
        >
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {OFFER_SUBPAGES.map((item, index) => {
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
                    className="group relative block h-full min-h-[280px] overflow-hidden rounded-2xl border-2 border-white/10 p-6 transition-colors duration-300 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark md:p-8"
                  >
                    <img
                      src={media.img}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="app-photo-scrim-card" aria-hidden />

                    <div className="relative z-10">
                      <div className="mb-4 inline-flex rounded-xl border border-white/15 bg-dark/40 p-3">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="mb-3 font-display text-xl font-bold text-white transition-colors group-hover:text-primary md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-white/80 md:text-base">{item.lead}</p>
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                        Szczegóły
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </GoldenBorderSection>
      </main>

      <Footer />
    </div>
  );
}