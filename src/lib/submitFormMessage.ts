import { isRecaptchaDisabled } from '../config/recaptcha';
import { sendFormEmail, type SendFormEmailResult } from './sendFormEmail';
import type { UseRecaptchaReturn } from '../hooks/useRecaptcha';

export type SubmitFormMessageOptions = {
  subject: string;
  text: string;
  replyTo?: string;
};

export async function submitFormMessage(
  recaptcha: UseRecaptchaReturn,
  payload: SubmitFormMessageOptions,
  options?: { submitting?: (value: boolean) => void },
): Promise<SendFormEmailResult> {
  options?.submitting?.(true);
  try {
    let recaptchaToken: string | undefined;
    if (!isRecaptchaDisabled()) {
      const token = await recaptcha.acquireToken();
      if (!token) {
        return { success: false, error: recaptcha.error ?? 'Weryfikacja reCAPTCHA nie powiodła się.' };
      }
      recaptchaToken = token;
    }

    const result = await sendFormEmail({ ...payload, recaptchaToken });
    if (result.success) {
      recaptcha.reset();
    }
    return result;
  } finally {
    options?.submitting?.(false);
  }
}
