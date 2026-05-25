import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Bus, Castle, MapPin, Star } from 'lucide-react';
import {
  SCHOOL_TRIPS_EXTRA_ATTRACTIONS,
  SCHOOL_TRIPS_GASTRONOMY,
  SCHOOL_TRIPS_INTRO,
  SCHOOL_TRIPS_TAGLINE,
  SCHOOL_TRIPS_TRANSPORT,
  SCHOOL_TRIPS_WHY_US,
  SCHOOL_TRIP_DESTINATIONS,
  SCHOOL_TRIP_JURAJSKIE_TRIO,
  SCHOOL_TRIP_SLASKI_WEHIKUL,
  type SchoolTripDestination,
  type SchoolTripPackage,
} from '../data/schoolTripsContent';

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="pl-5 relative text-white/80 leading-relaxed">
          <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-primary" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PackageCards({ packages }: { packages: SchoolTripPackage[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {packages.map((pkg) => (
        <div
          key={pkg.name}
          className="rounded-2xl border border-white/10 bg-dark/40 p-5 flex flex-col gap-2 hover:border-primary/50 transition-colors"
        >
          <p className="text-primary font-bold uppercase tracking-wider text-sm">{pkg.name}</p>
          <p className="text-white font-semibold">{pkg.price}</p>
          <p className="text-white/70 text-sm leading-relaxed">{pkg.details}</p>
        </div>
      ))}
    </div>
  );
}

function TransportBlock({ note }: { note?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-dark/30 p-6 md:p-8 space-y-4">
      <h4 className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
        <Bus size={18} aria-hidden />
        Transport
      </h4>
      {note && <p className="text-white/75 text-sm leading-relaxed">{note}</p>}
      <p className="text-white/80 leading-relaxed">{SCHOOL_TRIPS_TRANSPORT.intro}</p>
      <div className="space-y-3">
        <p className="font-semibold text-white">{SCHOOL_TRIPS_TRANSPORT.retro.title}</p>
        <p className="text-white/75 leading-relaxed">{SCHOOL_TRIPS_TRANSPORT.retro.text}</p>
      </div>
      <div className="space-y-3">
        <p className="font-semibold text-white">{SCHOOL_TRIPS_TRANSPORT.modern.title}</p>
        <p className="text-white/75 leading-relaxed">{SCHOOL_TRIPS_TRANSPORT.modern.text}</p>
      </div>
      <p className="flex gap-2 text-amber-200/90 text-sm leading-relaxed border-t border-white/10 pt-4">
        <AlertTriangle size={18} className="shrink-0 mt-0.5" aria-hidden />
        <span>{SCHOOL_TRIPS_TRANSPORT.warning}</span>
      </p>
    </div>
  );
}

function ExtrasBlock() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-white font-semibold mb-3">Dodatkowe atrakcje pojedyncze (do wyboru)</h4>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Chcesz urozmaicić dzień na zamku? Dorzuć do koszyka wycieczki wybrane, pojedyncze atrakcje:
        </p>
        <BulletList items={SCHOOL_TRIPS_EXTRA_ATTRACTIONS} />
      </div>
      <div>
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Gastronomia</h4>
        <BulletList items={SCHOOL_TRIPS_GASTRONOMY} />
      </div>
    </div>
  );
}

function DestinationSection({ destination }: { destination: SchoolTripDestination }) {
  return (
    <article id={destination.id} className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10 first:border-t-0 first:pt-0">
      <div className="flex items-start gap-3">
        <Castle className="text-primary shrink-0 mt-1" size={26} aria-hidden />
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold font-display text-white leading-tight">{destination.title}</h3>
          {destination.subtitle && (
            <p className="text-primary/90 font-medium mt-1">{destination.subtitle}</p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {destination.intro.map((paragraph) => (
          <p key={paragraph} className="text-white/80 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {destination.images && destination.images.length > 0 && (
        <div
          className={`grid gap-4 ${destination.images.length > 1 ? 'sm:grid-cols-2' : 'max-w-2xl'}`}
        >
          {destination.images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-white/10"
              loading="lazy"
            />
          ))}
        </div>
      )}

      <div>
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">W programie</h4>
        <BulletList items={destination.program} />
      </div>

      <p className="text-white font-semibold border-l-4 border-primary pl-4 py-1">{destination.price}</p>

      <div>
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Gotowe pakiety</h4>
        <PackageCards packages={destination.packages} />
      </div>

      {destination.showExtras && <ExtrasBlock />}
      {destination.showTransport && <TransportBlock />}
    </article>
  );
}

function HighlightSection({
  id,
  icon: Icon,
  title,
  intro,
  program,
  price,
  packages,
  showExtras,
  showTransport,
  transportNote,
}: {
  id: string;
  icon: typeof Star;
  title: string;
  intro: string[];
  program: string[];
  price: string;
  packages: SchoolTripPackage[];
  showExtras?: boolean;
  showTransport?: boolean;
  transportNote?: string;
}) {
  return (
    <article id={id} className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
      <div className="flex items-start gap-3">
        <Icon className="text-primary shrink-0 mt-1" size={26} aria-hidden />
        <h3 className="text-xl md:text-2xl font-extrabold font-display text-white leading-tight">{title}</h3>
      </div>
      {intro.map((paragraph) => (
        <p key={paragraph} className="text-white/80 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <div>
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">W programie</h4>
        <BulletList items={program} />
      </div>
      <p className="text-white font-semibold border-l-4 border-primary pl-4 py-1">{price}</p>
      <div>
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Gotowe pakiety</h4>
        <PackageCards packages={packages} />
      </div>
      {showExtras && <ExtrasBlock />}
      {showTransport && <TransportBlock note={transportNote} />}
    </article>
  );
}

export function SchoolTripsContent() {
  return (
    <div className="space-y-10 text-white/80 leading-relaxed">
      <header className="space-y-5 pb-2">
        <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">{SCHOOL_TRIPS_TAGLINE}</p>
        <p className="text-lg md:text-xl font-extrabold font-display text-white leading-snug">
          Wycieczki szkolne z JA‑YHYMM… Integracja Sport Turystyka Wypoczynek
        </p>
        <div className="space-y-4">
          {SCHOOL_TRIPS_INTRO.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      <nav
        aria-label="Skróty do destynacji"
        className="rounded-2xl border border-white/10 bg-dark/40 p-5 md:p-6"
      >
        <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Nasze trasy</p>
        <ul className="flex flex-wrap gap-2">
          {SCHOOL_TRIP_DESTINATIONS.map((d) => (
            <li key={d.id}>
              <a
                href={`#${d.id}`}
                className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 hover:border-primary hover:text-primary transition-colors"
              >
                {d.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#jurajskie-trio"
              className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 hover:border-primary hover:text-primary transition-colors"
            >
              Jurajskie Trio
            </a>
          </li>
          <li>
            <a
              href="#slaski-wehikul"
              className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 hover:border-primary hover:text-primary transition-colors"
            >
              Śląski wehikuł czasu
            </a>
          </li>
        </ul>
      </nav>

      {SCHOOL_TRIP_DESTINATIONS.map((destination) => (
        <div key={destination.id}>
          <DestinationSection destination={destination} />
        </div>
      ))}

      <HighlightSection
        id="jurajskie-trio"
        icon={Star}
        title={SCHOOL_TRIP_JURAJSKIE_TRIO.title}
        intro={SCHOOL_TRIP_JURAJSKIE_TRIO.intro}
        program={SCHOOL_TRIP_JURAJSKIE_TRIO.program}
        price={SCHOOL_TRIP_JURAJSKIE_TRIO.price}
        packages={SCHOOL_TRIP_JURAJSKIE_TRIO.packages}
        showExtras
        showTransport
      />

      <HighlightSection
        id="slaski-wehikul"
        icon={MapPin}
        title={SCHOOL_TRIP_SLASKI_WEHIKUL.title}
        intro={SCHOOL_TRIP_SLASKI_WEHIKUL.intro}
        program={SCHOOL_TRIP_SLASKI_WEHIKUL.program}
        price={SCHOOL_TRIP_SLASKI_WEHIKUL.price}
        packages={SCHOOL_TRIP_SLASKI_WEHIKUL.packages}
        showTransport
        transportNote={SCHOOL_TRIP_SLASKI_WEHIKUL.transportNote}
      />

      <section className="border-t border-white/10 pt-10 space-y-5">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-extrabold font-display text-white">
          <Star className="text-primary" size={24} aria-hidden />
          Dlaczego szkoły wybierają JA‑YHYMM…?
        </h3>
        <BulletList items={SCHOOL_TRIPS_WHY_US} />
      </section>

      <section className="rounded-2xl border-2 border-primary bg-primary/5 p-8 md:p-10 space-y-5">
        <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Kontakt i rezerwacje</h3>
        <p className="text-white/90 leading-relaxed">
          <a href="https://www.ja-yhymm.pl" className="text-primary hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
            www.ja-yhymm.pl
          </a>
          {' — '}
          skontaktuj się z nami i przygotujmy wspólnie wyjazd, który uczniowie będą wspominać przez lata.
        </p>
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 bg-primary text-dark font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3 rounded-full hover:bg-white transition-colors"
        >
          Napisz do nas
          <ArrowRight size={16} aria-hidden />
        </Link>
        <p className="text-white/60 text-sm">
          <a href="mailto:biuro@ja-yhymm.pl" className="text-primary hover:underline">
            biuro@ja-yhymm.pl
          </a>
          {' · '}
          <a href="tel:794997714" className="text-primary hover:underline">
            794 997 714
          </a>
        </p>
      </section>
    </div>
  );
}
