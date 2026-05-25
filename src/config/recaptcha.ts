export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

export function isRecaptchaDisabled(): boolean {
  return import.meta.env.VITE_DISABLE_RECAPTCHA === 'true';
}

export function getRecaptchaSiteKey(): string {
  const key = RECAPTCHA_SITE_KEY?.trim();
  if (!key) {
    throw new Error('Brak VITE_RECAPTCHA_SITE_KEY w konfiguracji środowiska.');
  }
  return key;
}
