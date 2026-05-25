import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { X, ChevronDown } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PhotoBottomScrim } from '../components/PhotoBottomScrim';
import { GalleryLightbox, type GalleryImageItem } from '../components/GalleryLightbox';
import { RentalFormSummary } from '../components/RentalFormSummary';
import { RENTAL_CONTENT_WIDE, RENTAL_GLASS_INNER } from '../constants/rentalPageLayout';
import { getRentalRegulationText } from '../data/rentalRegulations';
import { FormRecaptcha, FormSubmitButton, FormSubmitFeedback } from '../components/FormRecaptcha';
import { PhoneInput } from '../components/PhoneInput';
import { calculateEBikePricing, formatPaymentForEmail, formatSummaryForEmail } from '../data/rentalFormPricing';
import { submitRentalForm } from '../lib/rentalFormSubmit';
import { useRecaptcha } from '../hooks/useRecaptcha';

const KROSS_IMAGES = ['/images/wypozyczalnia/e-rowery/kross-1-v3.png', '/images/wypozyczalnia/e-rowery/kross-2-v3.png'];
const WINORA_IMAGES = ['/images/wypozyczalnia/e-rowery/winora-1-v3.png', '/images/wypozyczalnia/e-rowery/winora-2-v3.png'];

const KROSS_GALLERY: GalleryImageItem[] = KROSS_IMAGES.map((src, i) => ({
  src,
  alt: `Kross Influx Hybrid 1.0 — zdjęcie ${i + 1}`,
}));
const WINORA_GALLERY: GalleryImageItem[] = WINORA_IMAGES.map((src, i) => ({
  src,
  alt: `WINORA Yucatan X8 — zdjęcie ${i + 1}`,
}));

const REGULATIONS_TEXT = getRentalRegulationText('e-rowery');

export default function RentalEBikesPage() {
  const recaptcha = useRecaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{ success?: string | null; error?: string | null }>({});
  const [isRegulationsOpen, setIsRegulationsOpen] = useState(false);
  const [photoGallery, setPhotoGallery] = useState<{ images: readonly GalleryImageItem[]; index: number } | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    bikeModel: '',
    packageType: '',
    dateFrom: '',
    dateTo: '',
    message: '',
  });

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const priceSummary = useMemo(
    () => calculateEBikePricing(formData.packageType, formData.dateFrom, formData.dateTo),
    [formData.packageType, formData.dateFrom, formData.dateTo]
  );

  const equipmentLabel = useMemo(() => {
    if (formData.bikeModel && formData.packageType) return `${formData.bikeModel} (${formData.packageType})`;
    return formData.bikeModel || formData.packageType || 'e-rower';
  }, [formData.bikeModel, formData.packageType]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    localStorage.setItem('eBikeRentalForm', JSON.stringify(formData));

    const body = [
      'Formularz: Rezerwacja e-rowerów (/wypozyczalnia/e-rowery)',
      '',
      'Nowe zapytanie o rezerwacje e-roweru:',
      '',
      `Imie i nazwisko: ${formData.fullName}`,
      `Telefon: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Model roweru: ${formData.bikeModel}`,
      `Pakiet: ${formData.packageType}`,
      `Data od: ${formData.dateFrom}`,
      `Data do: ${formData.dateTo}`,
      '',
      'Wiadomosc:',
      formData.message || '-',
      formatSummaryForEmail(priceSummary),
      formatPaymentForEmail(formData.fullName, equipmentLabel),
    ].join('\n');

    await submitRentalForm(event, recaptcha, {
      subject: 'Formularz: Rezerwacja e-roweru',
      body,
      replyTo: formData.email,
      phone: formData.phone,
      setSubmitting: setIsSubmitting,
      setFeedback: setSubmitFeedback,
    });
  };

  useEffect(() => {
    if (!isRegulationsOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsRegulationsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isRegulationsOpen]);

  useEffect(() => {
    const saved = localStorage.getItem('eBikeRentalForm');
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      setFormData((previous) => ({ ...previous, ...parsed }));
    } catch {
    }
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="section-padding border-b border-white/5 relative overflow-hidden min-h-[56vh] md:min-h-[68vh] flex items-center">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/wypozyczalnia/e-rowery/hero-ebikes.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 18%',
            }}
            aria-hidden
          />
          <div className="absolute inset-0 z-0 bg-black/25 pointer-events-none" aria-hidden />
          <div className="app-photo-scrim" aria-hidden />
          <PhotoBottomScrim />
          <div className={`${RENTAL_CONTENT_WIDE} relative z-10`}>
            <nav className="text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Wypożyczalnia</span>
              <span className="mx-2">/</span>
              <span className="text-white/80">E-rowery</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Wypożyczalnia</h1>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight"
            >
              Odkryj Wolność na Dwóch Kołach - A Bo Co... Wypożyczalnia E-Rowerów: Jura i Śląsk
            </motion.h2>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className={`${RENTAL_CONTENT_WIDE} space-y-8`}>
            <div className={`glass-card ${RENTAL_GLASS_INNER} space-y-5`}>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white leading-tight">
                A Bo Co… Wypożyczalnia E- Rowerów: Jura & Śląsk
              </h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Marzysz o przemierzaniu szlaków Jury Krakowsko-Częstochowskiej bez zadyszki? A może chcesz aktywnie spędzić weekend
                w aglomeracji śląskiej? Nasza wypożyczalnia rowerów elektrycznych to przepustka do przygody, gdzie każde wzniesienie
                staje się czystą przyjemnością.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h3 className="text-primary font-bold text-lg mb-2">Gdzie nas znajdziesz? - Sezon letni</h3>
                  <p className="text-white/70 leading-relaxed">
                    Zapraszamy do serca Jury! Nasza baza mieści się przy Restauracji Złoty Jeleń w Złotym Potoku. To idealny punkt
                    startowy na wycieczkę - zjedz pyszne śniadanie i ruszaj na podbój zamków. Dowozimy sprzęt pod drzwi, abyś mógł
                    rozpocząć trasę dokładnie tam, gdzie Ci najwygodniej.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h3 className="text-primary font-bold text-lg mb-2">Poza sezonem / całorocznie</h3>
                  <p className="text-white/70 leading-relaxed">
                    Zapraszamy do naszej siedziby w Katowicach, ul. Niwna 9. Dowozimy sprzęt pod drzwi — rower możesz odebrać w biurze albo
                    umówić dostawę pod wskazany adres (bezpłatnie do 15 km od bazy w Katowicach, powyżej wg stawki 2,50 PLN / km).
                  </p>
                </div>
              </div>
            </div>

            <section className={`glass-card ${RENTAL_GLASS_INNER}`}>
              <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Nasza flota: komfort i technologia</h3>
              <h4 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-6">Kross Influx Hybrid 1.0</h4>
              <p className="text-white/75 leading-relaxed mb-4">
                Polski klasyk w wydaniu elektrycznym. Idealny na szutrowe drogi i leśne ścieżki. Intuicyjne wspomaganie sprawia, że
                nawet po 40 kilometrach trasy będziesz mieć uśmiech na twarzy.
              </p>
              <p className="text-white/80 mb-6">
                <span className="text-primary font-bold">Atuty:</span> Lekkość prowadzenia, solidna konstrukcja, świetny na jurajskie
                pagórki, mocny silnik.
              </p>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mb-6">
                <h5 className="text-primary font-bold mb-3 uppercase tracking-wider text-sm">Parametry techniczne</h5>
                <ul className="space-y-2 text-white/75">
                  <li><span className="text-white font-semibold">Silnik:</span> centralny Bafang M410 (moment obrotowy 80-90 Nm).</li>
                  <li><span className="text-white font-semibold">Bateria:</span> zintegrowana BMZ V10 720 Wh lub 820 Wh (wersja SUV).</li>
                  <li><span className="text-white font-semibold">Rama:</span> aluminium (rozmiary 16"-19").</li>
                  <li><span className="text-white font-semibold">Widelec:</span> SR Suntour XCM32 Boost (skok 100 mm lub 120 mm).</li>
                  <li><span className="text-white font-semibold">Napęd:</span> 1x9 Shimano Cues U4000.</li>
                  <li><span className="text-white font-semibold">Kaseta:</span> Shimano Cues LG300 (11-46T).</li>
                  <li><span className="text-white font-semibold">Hamulce:</span> hydrauliczne tarczowe Shimano MT200 (tarcze 180 mm).</li>
                  <li><span className="text-white font-semibold">Opony:</span> Obor Mike Bear 29" x 2.35".</li>
                  <li><span className="text-white font-semibold">Wyświetlacz:</span> Bafang DP C245 (z portem USB-C).</li>
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {KROSS_GALLERY.map((item, index) => (
                  <motion.button
                    key={item.src}
                    type="button"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setPhotoGallery({ images: KROSS_GALLERY, index })}
                    className="group relative overflow-visible pb-2 text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                    aria-label={`Powiększ: ${item.alt}`}
                  >
                    <img src={item.src} alt={item.alt} className="w-full aspect-[4/3] object-contain bg-transparent pointer-events-none" loading="lazy" />
                    <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.button>
                ))}
              </div>
            </section>

            <section className={`glass-card ${RENTAL_GLASS_INNER}`}>
              <h4 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-6">WINORA Yucatan X8</h4>
              <p className="text-white/75 leading-relaxed mb-4">
                Niemiecka precyzja i trekkingowy komfort. Wyposażony w mocny silnik, który nie boi się stromych podjazdów. Idealny dla
                osób ceniących wygodną geometrię ramy i stabilność.
              </p>
              <p className="text-white/80 mb-6">
                <span className="text-primary font-bold">Atuty:</span> Wysoki moment obrotowy, kompletne wyposażenie wyprawowe,
                elegancja.
              </p>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mb-6">
                <h5 className="text-primary font-bold mb-3 uppercase tracking-wider text-sm">Parametry techniczne</h5>
                <ul className="space-y-2 text-white/75">
                  <li><span className="text-white font-semibold">Silnik:</span> Yamaha PW-S2 250W, 75 Nm - dynamiczne wspomaganie na długich trasach i podjazdach.</li>
                  <li><span className="text-white font-semibold">Bateria:</span> Yamaha InTube 720Wh - długi zasięg i niezawodność na trasie.</li>
                  <li><span className="text-white font-semibold">Napęd:</span> Shimano Acera 8-biegowy - precyzyjna, płynna zmiana przełożeń.</li>
                  <li><span className="text-white font-semibold">Hamulce:</span> Shimano BR-MT200, dwutłoczkowe zaciski i tarcze 180 mm.</li>
                  <li><span className="text-white font-semibold">Amortyzacja:</span> SR Suntour XCM32 ATB DS LO 100 mm.</li>
                  <li><span className="text-white font-semibold">Geometria:</span> szeroka kierownica JD MTB502A, ergonomiczne chwyty Velo i siodło Selle Royal.</li>
                  <li><span className="text-white font-semibold">Wyposażenie:</span> bagażnik Easylife System, błotniki Curana Apollo, oświetlenie Herrmans CL3 i AXA Juno.</li>
                  <li><span className="text-white font-semibold">Zabezpieczenie:</span> możliwość montażu zapięcia Abus Plus System.</li>
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {WINORA_GALLERY.map((item, index) => (
                  <motion.button
                    key={item.src}
                    type="button"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setPhotoGallery({ images: WINORA_GALLERY, index })}
                    className="group relative overflow-visible pb-2 text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                    aria-label={`Powiększ: ${item.alt}`}
                  >
                    <img src={item.src} alt={item.alt} className="w-full aspect-[4/3] object-contain bg-transparent pointer-events-none" loading="lazy" />
                    <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.button>
                ))}
              </div>
            </section>

            <section className={`glass-card ${RENTAL_GLASS_INNER} space-y-8`}>
              <div>
                <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Cennik i pakiety</h3>
                <p className="text-white/75 leading-relaxed mb-5">
                  Inwestujemy w Twój komfort, oferując przejrzyste zasady bez ukrytych kosztów.
                </p>
                <div className="space-y-3 md:hidden">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Wypożyczenie (1 doba)</p>
                    <p className="text-primary font-bold mt-1">150 PLN</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Weekend (Pt-Nd)</p>
                    <p className="text-primary font-bold mt-1">350 PLN</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Kaucja zwrotna (za rower)</p>
                    <p className="text-primary font-bold mt-1">500 PLN</p>
                  </div>
                </div>
                <div className="hidden md:block rounded-2xl border border-white/10 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Usługa</th>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Cena</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Wypożyczenie (1 doba)</td>
                        <td className="px-4 py-3 text-primary font-bold">150 PLN</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Weekend (Pt-Nd)</td>
                        <td className="px-4 py-3 text-primary font-bold">350 PLN</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Kaucja zwrotna (za rower)</td>
                        <td className="px-4 py-3 text-primary font-bold">500 PLN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h4 className="text-white font-bold mb-2">Pakiet "Duo" (2 rowery)</h4>
                  <p className="text-primary font-bold">270 PLN / doba</p>
                  <p className="text-white/65 mt-1">Oszczędzasz 30 PLN.</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h4 className="text-white font-bold mb-2">Pakiet "Rodzinny/Ekipa" (4 rowery)</h4>
                  <p className="text-primary font-bold">500 PLN / doba</p>
                  <p className="text-white/65 mt-1">Czwarty rower za pół ceny.</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h4 className="text-primary font-bold mb-2">Dowóz pod Twoje drzwi</h4>
                <p className="text-white/75">Bezpłatny dowóz: do 15 km od naszych baz (Złoty Jeleń lub Katowice ul. Niwna 9).</p>
                <p className="text-white/75 mt-2">Powyżej 15 km: dopłata 2,50 PLN / km (liczone w obie strony).</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-primary font-bold">Dlaczego warto wybrać właśnie nas?</h4>
                <ul className="list-disc pl-6 text-white/75 space-y-1.5">
                  <li>Sprzęt premium: Kross i Winora to gwarancja jakości oraz realnego zasięgu.</li>
                  <li>Mobilność: dowozimy rower pod hotelem, dom lub na start szlaku.</li>
                  <li>Lokalizacja: ze Złotego Jelenia od razu ruszasz na najpiękniejsze trasy Jury.</li>
                  <li>Wsparcie: przed każdą jazdą prowadzimy krótki instruktaż obsługi e-bike'a.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-primary font-bold">Płatności - szybko i bezpiecznie</h4>
                <ul className="list-disc pl-6 text-white/75 space-y-1.5">
                  <li>Dla klienta rekomendujemy BLIK lub kartę płatniczą (posiadamy terminale mobilne).</li>
                  <li>Akceptujemy również przelewy natychmiastowe oraz gotówkę.</li>
                  <li>Kaucja może być zabezpieczona preautoryzacją na karcie i wraca po zwrocie sprzętu.</li>
                </ul>
              </div>
            </section>

            <section className={`glass-card ${RENTAL_GLASS_INNER}`} id="formularz-kontaktowy">
              <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Zarezerwuj swój e-bike już dziś</h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Imię i nazwisko*</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(event) => updateFormData('fullName', event.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Telefon*</label>
                    <PhoneInput
                      required
                      value={formData.phone}
                      onChange={(value) => updateFormData('phone', value)}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Email*</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(event) => updateFormData('email', event.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Model roweru*</label>
                    <div className="relative min-w-0">
                      <select
                        required
                        value={formData.bikeModel}
                        onChange={(event) => updateFormData('bikeModel', event.target.value)}
                        className="w-full max-w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10 truncate"
                      >
                        <option value="" className="bg-dark">
                          Wybierz model
                        </option>
                        <option className="bg-dark">Kross Influx Hybrid 1.0</option>
                        <option className="bg-dark">WINORA Yucatan X8</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Pakiet*</label>
                    <div className="relative min-w-0">
                      <select
                        required
                        value={formData.packageType}
                        onChange={(event) => updateFormData('packageType', event.target.value)}
                        className="w-full max-w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10 truncate"
                      >
                        <option value="" className="bg-dark">
                          Wybierz pakiet
                        </option>
                        <option className="bg-dark">1 rower</option>
                        <option className="bg-dark">Pakiet Duo (oszczędność 30zł)</option>
                        <option className="bg-dark">Pakiet Rodzinny/Ekipa (4 rowery) - czwarty rower -50%</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Termin*</label>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                      <div className="flex-1">
                        <input
                          type="date"
                          required
                          value={formData.dateFrom}
                          onChange={(event) => updateFormData('dateFrom', event.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <span className="text-primary font-bold self-center">-</span>
                      <div className="flex-1">
                        <input
                          type="date"
                          required
                          value={formData.dateTo}
                          onChange={(event) => updateFormData('dateTo', event.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Wiadomość</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(event) => updateFormData('message', event.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <RentalFormSummary summary={priceSummary} renterName={formData.fullName} equipmentLabel={equipmentLabel} />
                <p className="text-sm text-white/70 leading-relaxed">
                  Przed rezerwacją zapoznaj się z{' '}
                  <button
                    type="button"
                    className="text-primary font-semibold hover:underline"
                    onClick={() => setIsRegulationsOpen(true)}
                  >
                    Regulaminem
                  </button>
                  , który podpiszesz przed wydaniem sprzętu.
                </p>
                <FormRecaptcha recaptcha={recaptcha} className="pt-2" />
                <FormSubmitFeedback message={submitFeedback.success} error={submitFeedback.error} />
                <FormSubmitButton verified={recaptcha.isVerified} verifying={isSubmitting || recaptcha.isVerifying}>
                  Wyślij formularz
                </FormSubmitButton>
              </form>
            </section>
          </div>
        </section>
      </main>

      {isRegulationsOpen && (
        <div
          className="fixed inset-0 z-[120] bg-dark/90 backdrop-blur-sm p-4 md:p-6 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Regulamin wypożyczalni rowerów elektrycznych"
          onClick={() => setIsRegulationsOpen(false)}
        >
          <div
            className="w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl border border-white/10 bg-dark-lighter p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <h3 className="text-primary font-bold uppercase tracking-wider">Regulamin i umowa wynajmu</h3>
              <button
                type="button"
                className="rounded-full border border-white/20 p-2 text-white hover:text-primary hover:border-primary/40 transition-colors"
                onClick={() => setIsRegulationsOpen(false)}
                aria-label="Zamknij regulamin"
              >
                <X size={18} />
              </button>
            </div>
            <pre className="text-white/75 whitespace-pre-wrap leading-relaxed text-sm md:text-base font-sans">{REGULATIONS_TEXT}</pre>
          </div>
        </div>
      )}

      {photoGallery ? (
        <GalleryLightbox
          images={photoGallery.images}
          index={photoGallery.index}
          onIndexChange={(i) => setPhotoGallery((g) => (g ? { ...g, index: i } : null))}
          onClose={() => setPhotoGallery(null)}
          zIndexClass="z-[135]"
        />
      ) : null}

      <Footer />
    </div>
  );
}
