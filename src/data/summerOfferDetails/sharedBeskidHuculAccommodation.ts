import type { SummerOfferAccommodationBlock } from './types';

const H = '/utils/oferta-letnia/beskid-hucul';

export const BESKID_HUCUL_ACCOMMODATION_BLOCK: SummerOfferAccommodationBlock = {
  blockTitle: 'Ośrodek Kolonijno-Wypoczynkowy „Hucuł” (Brenna)',
  paragraphs: [
    'Położenie: w dolinie potoku Jatny, na zboczu góry, tuż przy lesie.',
    'Pokoje: 3-, 4-, 5-osobowe z łazienkami i telewizorami.',
    'Udogodnienia: jadalnia, świetlica, kawiarenka, sale do gry w tenisa stołowego i bilard, taras ze sprzętem wypoczynkowym (meble ogrodowe, leżaki), wiata grillowa, teren rekreacyjny wokół obiektu, Wi-Fi.',
  ],
  images: [
    { src: `${H}/hucul-1.png`, alt: 'Ośrodek Hucuł w Brennej — budynek ośrodka wśród zieleni' },
    { src: `${H}/hucul-2.png`, alt: 'Ośrodek Hucuł — pokój wieloosobowy dla uczestników obozu' },
  ],
};
