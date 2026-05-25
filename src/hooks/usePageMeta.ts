import { useEffect } from 'react';
import {
  SITE,
  absoluteOgImage,
  absoluteUrl,
  formatPageTitle,
  getOrganizationJsonLd,
  type PageMetaInput,
} from '../config/siteSeo';

const JSON_LD_SCRIPT_ID = 'jayhymm-org-jsonld';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertJsonLd() {
  let script = document.getElementById(JSON_LD_SCRIPT_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = JSON_LD_SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(getOrganizationJsonLd());
}

export function applyPageMeta(input: PageMetaInput = {}) {
  const path = input.path ?? window.location.pathname;
  const title = formatPageTitle(input.title);
  const description = input.description ?? SITE.defaultDescription;
  const url = absoluteUrl(path);
  const image = absoluteOgImage();
  const robots = input.noIndex ? 'noindex, nofollow' : 'index, follow';

  document.title = title;
  document.documentElement.lang = 'pl';

  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', robots);
  upsertMeta('name', 'author', SITE.name);

  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:site_name', SITE.name);
  upsertMeta('property', 'og:locale', SITE.locale);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:image', image);
  upsertMeta('property', 'og:image:width', String(SITE.ogImageWidth));
  upsertMeta('property', 'og:image:height', String(SITE.ogImageHeight));
  upsertMeta('property', 'og:image:alt', `${SITE.brand} — obozy, eventy i wypożyczalnia na Jurze`);

  upsertMeta('name', 'twitter:card', SITE.twitterCard);
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', image);

  upsertLink('canonical', url);
  upsertJsonLd();
}

export function usePageMeta(input: PageMetaInput) {
  useEffect(() => {
    applyPageMeta(input);
  }, [input.title, input.description, input.path, input.noIndex]);
}
