/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_FORM_ENDPOINT?: string;
  readonly VITE_DISABLE_RECAPTCHA?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
