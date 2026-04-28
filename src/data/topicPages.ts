export type TopicSubpage = {
  slug: string;
  title: string;
  lead: string;
};

export const TOPIC_SUBPAGES: TopicSubpage[] = [
  { slug: 'quady', title: 'Quady', lead: 'Przygody i szkolenia na quadach w terenie dopasowane do poziomu grupy.' },
  { slug: 'off-road', title: 'Off Road', lead: 'Zajęcia i przejazdy off-roadowe w wymagającym terenie.' },
  {
    slug: 'wojskowe-pojazdy-terenowe',
    title: 'Wojskowe pojazdy terenowe',
    lead: 'Przejażdżki i aktywności z wykorzystaniem ciężkich pojazdów terenowych.',
  },
  {
    slug: 'zajecia-linowe-i-wspinaczka',
    title: 'Zajęcia linowe i wspinaczka',
    lead: 'Techniki linowe i wspinaczkowe realizowane bezpiecznie pod opieką instruktorów.',
  },
  { slug: 'paintball', title: 'Paintball', lead: 'Scenariuszowe rozgrywki paintballowe dla grup szkolnych i firmowych.' },
  { slug: 'militaria', title: 'Militaria', lead: 'Programy militarne, musztra i zajęcia taktyczne w terenie.' },
  { slug: 'survival', title: 'Survival', lead: 'Szkolenia i zadania z przetrwania w różnych warunkach terenowych.' },
  {
    slug: 'atrakcje-wodne-i-podwodne',
    title: 'Atrakcje wodne i podwodne',
    lead: 'Aktywności wodne i podwodne od rekreacji po moduły specjalistyczne.',
  },
  { slug: 'jazda-konna', title: 'Jazda konna', lead: 'Zajęcia konne dla początkujących i zaawansowanych uczestników.' },
  {
    slug: 'pierwsza-pomoc-i-ratownictwo',
    title: 'Pierwsza pomoc i ratownictwo',
    lead: 'Praktyczne szkolenia z pierwszej pomocy i działań ratowniczych.',
  },
  { slug: 'inne', title: 'Inne', lead: 'Niestandardowe aktywności i programy przygotowane pod potrzeby grupy.' },
];

export function getTopicBySlug(slug: string | undefined): TopicSubpage | undefined {
  if (!slug) return undefined;
  return TOPIC_SUBPAGES.find((topic) => topic.slug === slug);
}
