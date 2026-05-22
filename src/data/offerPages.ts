export type OfferSubpage = {
  slug: string;
  title: string;
  
  lead: string;
};

export const OFFER_SUBPAGES: OfferSubpage[] = [
  {
    slug: 'obozy-dla-klas-mundurowych',
    title: 'Obozy dla klas mundurowych',
    lead: 'Trening, dyscyplina i przygoda w formule przygotowanej pod klasy o profilu mundurowym.',
  },
  {
    slug: 'obozy-i-kolonie',
    title: 'Obozy i kolonie',
    lead: 'Aktywny wypoczynek dla dzieci i młodzieży — programy dopasowane do wieku i zainteresowań grupy.',
  },
  {
    slug: 'wycieczki-szkolne',
    title: 'Wycieczki szkolne',
    lead: 'Organizacja wyjazdów klasowych z bezpieczeństwem, logistyką i merytoryką na pierwszym miejscu.',
  },
  {
    slug: 'eventy',
    title: 'Eventy',
    lead: 'Imprezy integracyjne i firmowe — od koncepcji po realizację na miejscu.',
  },
  {
    slug: 'wieczory-kawalerskie-i-panienskie',
    title: 'Wieczory kawalerskie i panieńskie',
    lead: 'Wieczór przed ślubem w stylu dopasowanym do ekipy — bezpiecznie i z pamiętną atmosferą.',
  },
  {
    slug: 'wynajem-sprzetu',
    title: 'Wynajem sprzętu',
    lead: 'Sprzęt na event, obóz lub wyjazd — ustalenia indywidualnie pod rodzaj imprezy i termin.',
  },
  {
    slug: 'transport',
    title: 'Transport',
    lead: 'Logistyka dojazdowa na wyjazdy i eventy — wygodne rozwiązania dla grup.',
  },
  {
    slug: 'szkolenia-i-kursy',
    title: 'Szkolenia i kursy',
    lead: 'Warsztaty i szkolenia z doświadczoną kadrową — tematy i poziom dopasowujemy do grupy.',
  },
  {
    slug: 'baza-noclegowa',
    title: 'Baza noclegowa',
    lead: 'Noclegi dla grup i wydarzeń — warunki i lokalizacja ustalane pod projekt.',
  },
  {
    slug: 'baza-serwisowa',
    title: 'Baza serwisowa',
    lead: 'Zaplecze techniczne i serwisowe wspierające organizację wyjazdów i imprez terenowych.',
  },
];

export function getOfferBySlug(slug: string | undefined): OfferSubpage | undefined {
  if (!slug) return undefined;
  return OFFER_SUBPAGES.find((p) => p.slug === slug);
}

const MUNDUROWE_SLUG = 'obozy-dla-klas-mundurowych';

/** Linki podmenu Oferta — obozy mundurowe na górze listy. */
export function getOfferNavSubmenu(): { label: string; to: string }[] {
  const mundurowe = OFFER_SUBPAGES.find((p) => p.slug === MUNDUROWE_SLUG);
  const rest = OFFER_SUBPAGES.filter((p) => p.slug !== MUNDUROWE_SLUG);
  return [
    ...(mundurowe ? [{ label: mundurowe.title, to: `/oferta/${mundurowe.slug}` }] : []),
    { label: 'Przegląd oferty', to: '/oferta' },
    ...rest.map((p) => ({ label: p.title, to: `/oferta/${p.slug}` })),
  ];
}
