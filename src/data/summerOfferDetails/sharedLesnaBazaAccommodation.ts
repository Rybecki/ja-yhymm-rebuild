import type { SummerOfferAccommodationBlock } from './types';

const LESNA = '/utils/oferta-letnia/jura-military-camp/gallery';

export const LESNA_BAZA_ACCOMMODATION_BLOCK: SummerOfferAccommodationBlock = {
  blockTitle: 'Leśna Baza (Janów)',
  paragraphs: [
    'Drewniane domki letniskowe w „Leśnej Bazie” w Janowie przy bazie ZHP, na Jurze Krakowsko-Częstochowskiej.',
    'Domki 6–8-osobowe z łazienkami, możliwe łóżka piętrowe.',
    'Do dyspozycji uczestników: budynek z jadalnią, świetlica, miejsce na ognisko, teren rekreacyjny.',
  ],
  images: [
    { src: `${LESNA}/lesna-baza-1.png`, alt: 'Leśna Baza — obóz w lesie, widok z góry' },
    { src: `${LESNA}/lesna-baza-2.png`, alt: 'Leśna Baza — jadalnia na świeżym powietrzu' },
  ],
};
