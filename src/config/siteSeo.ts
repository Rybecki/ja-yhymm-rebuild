import { OFFER_SUBPAGES, getOfferBySlug } from '../data/offerPages';
import { TOPIC_SUBPAGES, getTopicBySlug } from '../data/topicPages';
import { SUMMER_OFFER_SECTIONS } from '../data/summerOffers';
import { WINTER_OFFERS } from '../data/winterOffers';
import { getSummerOfferBySlug } from '../data/summerOffers';
import { getWinterOfferBySlug } from '../data/winterOffers';

function readSiteUrl(): string {
  const fromVite =
    typeof import.meta !== 'undefined' && import.meta.env
      ? (import.meta.env.VITE_SITE_URL as string | undefined)
      : undefined;
  const fromNode = typeof process !== 'undefined' ? process.env.VITE_SITE_URL : undefined;
  const raw = fromVite ?? fromNode ?? 'https://www.ja-yhymm.pl';
  return raw.replace(/\/$/, '');
}

export const SITE = {
  name: 'JA YHYMM...',
  brand: 'JA YHYMM',
  defaultTitle: 'JA YHYMM... | Organizacja obozów i eventów',
  defaultDescription:
    'Fundacja JA YHYMM — obozy i kolonie, wycieczki szkolne, eventy integracyjne, tematyka militarna i survival oraz wypożyczalnia sprzętu. Ponad 25 lat doświadczenia na Jurze Krakowsko-Częstochowskiej.',
  siteUrl: readSiteUrl(),
  locale: 'pl_PL',
  ogImagePath: '/images/og-jayhymm.png',
  ogImageWidth: 1024,
  ogImageHeight: 537,
  twitterCard: 'summary_large_image' as const,
};

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Fundacja Integracji, Sportu, Turystyki i Wypoczynku Dzieci i Młodzieży JA YHYMM...',
    alternateName: SITE.brand,
    url: SITE.siteUrl,
    logo: absoluteUrl('/utils/logo-jayhymm.png'),
    image: absoluteOgImage(),
    email: 'biuro@ja-yhymm.pl',
    telephone: '+48-794-997-714',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Niwna 9',
      addressLocality: 'Katowice',
      postalCode: '40-406',
      addressCountry: 'PL',
    },
    sameAs: [
      'https://www.facebook.com/jayhymmfp',
      'https://www.instagram.com/jayhymm_najlepszeobozy/',
      'https://www.youtube.com/@jayhymm1996',
    ],
  };
}

export type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function formatPageTitle(pageTitle?: string): string {
  if (!pageTitle) return SITE.defaultTitle;
  return `${pageTitle} | ${SITE.brand}`;
}

export function absoluteUrl(path: string = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.siteUrl}${normalized}`;
}

export function absoluteOgImage(path: string = SITE.ogImagePath): string {
  return absoluteUrl(path);
}

const STATIC_ROUTES: Record<string, PageMetaInput> = {
  '/': {
    title: 'Strona główna',
    description:
      'JA YHYMM — organizacja obozów, kolonii, wycieczek szkolnych i eventów. Quady, survival, paintball, wspinaczka i wypożyczalnia sprzętu na Jurze.',
  },
  '/o-nas': {
    title: 'O nas',
    description: 'Poznaj Fundację JA YHYMM — zespół, misja i ponad 25 lat doświadczenia w organizacji obozów i imprez terenowych.',
  },
  '/oferta': {
    title: 'Oferta',
    description: 'Przegląd oferty JA YHYMM: obozy, wycieczki szkolne, eventy, transport, bazy noclegowe i wynajem sprzętu.',
  },
  '/oferta/obozy-i-kolonie': {
    title: 'Obozy i kolonie',
    description: 'Letnie i zimowe obozy oraz kolonie dla dzieci i młodzieży — programy na Jurze i w wybranych lokalizacjach.',
  },
  '/oferta/obozy-i-kolonie/lato': {
    title: 'Obozy letnie',
    description: 'Letnie obozy i kolonie JA YHYMM — militaria, survival, quady, wspinaczka, off-road i wiele innych programów.',
  },
  '/oferta/obozy-i-kolonie/zima': {
    title: 'Obozy zimowe',
    description: 'Zimowa oferta obozowa JA YHYMM — aktywny wypoczynek i programy przygodowe w sezonie zimowym.',
  },
  '/galeria': {
    title: 'Galeria',
    description: 'Zdjęcia z obozów, eventów i zajęć terenowych organizowanych przez Fundację JA YHYMM.',
  },
  '/aktualnosci': {
    title: 'Aktualności',
    description: 'Aktualności, zapowiedzi turnusów i informacje z życia Fundacji JA YHYMM.',
  },
  '/kontakt': {
    title: 'Kontakt',
    description: 'Skontaktuj się z JA YHYMM — telefon, e-mail, adres w Katowicach. Formularz kontaktowy online.',
  },
  '/dla-ciebie/formularze': {
    title: 'Formularze zgłoszeniowe',
    description:
      'Zapisz się na obóz młodzieżowy, wycieczkę szkolną lub event — formularze zgłoszeniowe Fundacji JA YHYMM online.',
  },
  '/dla-ciebie/regulaminy': {
    title: 'Regulaminy',
    description: 'Regulaminy korzystania z usług, obozów, sprzętu i atrakcji Fundacji JA YHYMM — do pobrania w PDF.',
  },
  '/dla-ciebie/strefa-rodzica': {
    title: 'Strefa rodzica',
    description: 'Informacje dla rodziców uczestników obozów i kolonii organizowanych przez JA YHYMM.',
  },
  '/polityka-prywatnosci': {
    title: 'Polityka prywatności',
    description: 'Polityka prywatności i ochrony danych osobowych Fundacji JA YHYMM.',
  },
  '/wypozyczalnia/e-rowery': {
    title: 'Wypożyczalnia e-rowerów',
    description: 'Wynajem rowerów elektrycznych Kross i Winora — rezerwacja online, dowóz na Jurę i okolice Katowic.',
  },
  '/wypozyczalnia/kajaki': {
    title: 'Wypożyczalnia kajaków',
    description: 'Wypożyczalnia kajaków Kajako-Mobil — mobilna dostawa sprzętu, spływy na własną odpowiedzialność.',
  },
  '/wypozyczalnia/vip-bus': {
    title: 'VIP Bus',
    description: 'Wynajem busa VIP Renault Master — transport grupowy na eventy, wesela i wyjazdy.',
  },
  '/wypozyczalnia/autolaweta': {
    title: 'Autolaweta',
    description: 'Usługa transportu autolawetą — przewóz pojazdów, przyczep i ładunków, wycena indywidualna.',
  },
  '/wypozyczalnia/dmuchance': {
    title: 'Dmuchańce i eventy',
    description: 'Wynajem dmuchańców, ścianek wspinaczkowych i atrakcji eventowych z obsługą JA YHYMM.',
  },
};

export function resolveRouteSeo(pathname: string): PageMetaInput {
  if (STATIC_ROUTES[pathname]) {
    return { ...STATIC_ROUTES[pathname], path: pathname };
  }

  const offerSlugMatch = pathname.match(/^\/oferta\/([^/]+)$/);
  if (offerSlugMatch) {
    const offer = getOfferBySlug(offerSlugMatch[1]);
    if (offer) {
      return { title: offer.title, description: offer.lead, path: pathname };
    }
  }

  const summerMatch = pathname.match(/^\/oferta\/obozy-i-kolonie\/lato\/([^/]+)$/);
  if (summerMatch) {
    const found = getSummerOfferBySlug(summerMatch[1]);
    if (found) {
      return {
        title: found.offer.title,
        description: `Obóz letni: ${found.offer.title} — ${found.section.title}. Zapisz się przez JA YHYMM.`,
        path: pathname,
      };
    }
  }

  const winterMatch = pathname.match(/^\/oferta\/obozy-i-kolonie\/zima\/([^/]+)$/);
  if (winterMatch) {
    const offer = getWinterOfferBySlug(winterMatch[1]);
    if (offer) {
      return {
        title: offer.title,
        description: `Obóz zimowy: ${offer.title}. Szczegóły i zapisy — JA YHYMM.`,
        path: pathname,
      };
    }
  }

  const seasonMatch = pathname.match(/^\/oferta\/obozy-i-kolonie\/(lato|zima)$/);
  if (seasonMatch) {
    return resolveRouteSeo(`/oferta/obozy-i-kolonie/${seasonMatch[1]}`);
  }

  const topicMatch = pathname.match(/^\/tematyka\/([^/]+)$/);
  if (topicMatch) {
    const topic = getTopicBySlug(topicMatch[1]);
    if (topic) {
      return { title: topic.title, description: topic.lead, path: pathname };
    }
  }

  return { path: pathname };
}

export function getSitemapPaths(): string[] {
  const paths = new Set<string>(Object.keys(STATIC_ROUTES));

  for (const offer of OFFER_SUBPAGES) {
    paths.add(`/oferta/${offer.slug}`);
  }
  for (const topic of TOPIC_SUBPAGES) {
    paths.add(`/tematyka/${topic.slug}`);
  }
  for (const section of SUMMER_OFFER_SECTIONS) {
    for (const offer of section.offers) {
      paths.add(`/oferta/obozy-i-kolonie/lato/${offer.slug}`);
    }
  }
  for (const offer of WINTER_OFFERS) {
    paths.add(`/oferta/obozy-i-kolonie/zima/${offer.slug}`);
  }

  return [...paths].sort();
}
