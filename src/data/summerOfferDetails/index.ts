import type { SummerOfferDetail } from './types';
import { BESKIDZKI_RAJD_KONNY_DETAIL } from './beskidzkiRajdKonny';
import { JURA_CLIMBING_CAMP_DETAIL } from './juraClimbingCamp';
import { JURA_FIGHT_CAMP_DETAIL } from './juraFightCamp';
import { JURA_ART_CAMP_DETAIL } from './juraArtCamp';
import { JURA_CHILL_FUN_DETAIL } from './juraChillFun';
import { JURA_KIDS_PATROL_CAMP_DETAIL } from './juraKidsPatrolCamp';
import { JURA_LEGO_CAMP_DETAIL } from './juraLegoCamp';
import { JURA_MILITARY_CAMP_DETAIL } from './juraMilitaryCamp';
import { JURA_MULTI_CAMP_DETAIL } from './juraMultiCamp';
import { JURA_OFF_ROAD_CAMP_4X4_DETAIL } from './juraOffRoadCamp4x4';
import { JURA_QUAD_ACADEMY_CAMP_DETAIL } from './juraQuadAcademyCamp';
import { JURA_QUAD_CAMP_DETAIL } from './juraQuadCamp';
import { JURA_SURVIVAL_CAMP_DETAIL } from './juraSurvivalCamp';
import { OBOZ_JAZDY_KONNEJ_DETAIL } from './obozJazdyKonnej';

const REGISTRY: Record<string, SummerOfferDetail> = {
  'jura-military-camp': JURA_MILITARY_CAMP_DETAIL,
  'jura-survival-camp': JURA_SURVIVAL_CAMP_DETAIL,
  'jura-climbing-camp': JURA_CLIMBING_CAMP_DETAIL,
  'jura-fight-camp': JURA_FIGHT_CAMP_DETAIL,
  'jura-off-road-camp-4x4': JURA_OFF_ROAD_CAMP_4X4_DETAIL,
  'jura-multi-camp': JURA_MULTI_CAMP_DETAIL,
  'jura-quad-academy-camp': JURA_QUAD_ACADEMY_CAMP_DETAIL,
  'jura-quad-camp': JURA_QUAD_CAMP_DETAIL,
  'jura-kids-patrol-camp': JURA_KIDS_PATROL_CAMP_DETAIL,
  'jura-lego-camp': JURA_LEGO_CAMP_DETAIL,
  'jura-art-camp': JURA_ART_CAMP_DETAIL,
  'jura-chill-fun': JURA_CHILL_FUN_DETAIL,
  'oboz-jazdy-konnej': OBOZ_JAZDY_KONNEJ_DETAIL,
  'beskidzki-rajd-konny': BESKIDZKI_RAJD_KONNY_DETAIL,
};

export type {
  SummerOfferAccommodationBlock,
  SummerOfferDetail,
  SummerOfferGalleryImage,
  SummerOfferProgramSection,
  SummerOfferTermsGroup,
} from './types';
export { BESKIDZKI_RAJD_KONNY_DETAIL } from './beskidzkiRajdKonny';
export { JURA_ART_CAMP_DETAIL } from './juraArtCamp';
export { JURA_CHILL_FUN_DETAIL } from './juraChillFun';
export { JURA_CLIMBING_CAMP_DETAIL } from './juraClimbingCamp';
export { JURA_FIGHT_CAMP_DETAIL } from './juraFightCamp';
export { JURA_KIDS_PATROL_CAMP_DETAIL } from './juraKidsPatrolCamp';
export { JURA_LEGO_CAMP_DETAIL } from './juraLegoCamp';
export { JURA_MILITARY_CAMP_DETAIL } from './juraMilitaryCamp';
export { JURA_MULTI_CAMP_DETAIL } from './juraMultiCamp';
export { JURA_OFF_ROAD_CAMP_4X4_DETAIL } from './juraOffRoadCamp4x4';
export { JURA_QUAD_ACADEMY_CAMP_DETAIL } from './juraQuadAcademyCamp';
export { JURA_QUAD_CAMP_DETAIL } from './juraQuadCamp';
export { JURA_SURVIVAL_CAMP_DETAIL } from './juraSurvivalCamp';
export { OBOZ_JAZDY_KONNEJ_DETAIL } from './obozJazdyKonnej';

export function getSummerOfferDetail(slug: string | undefined): SummerOfferDetail | undefined {
  if (!slug) return undefined;
  return REGISTRY[slug];
}
