import type { FormEvent } from 'react';
import type { UseRecaptchaReturn } from '../hooks/useRecaptcha';
import { getPhoneValidationError } from './phoneValidation';
import { submitFormMessage } from './submitFormMessage';

export function validateFormPhones(form: HTMLFormElement): string | null {
  const phoneFields = form.querySelectorAll<HTMLInputElement>('input[data-phone-input="true"]');
  for (const field of phoneFields) {
    const error = getPhoneValidationError(field.value, field.required);
    if (error) return error;
  }
  return null;
}

export function buildMailtoBody(form: HTMLFormElement): string {
  const data = new FormData(form);
  const lines: string[] = [];

  for (const [key, value] of data.entries()) {
    if (key === 'g-recaptcha-response') continue;
    if (typeof value === 'string' && value.trim()) {
      lines.push(`${key}: ${value.trim()}`);
    }
  }

  return lines.length > 0 ? lines.join('\n') : '-';
}

export async function submitFormWithRecaptcha(
  event: FormEvent<HTMLFormElement>,
  recaptcha: UseRecaptchaReturn,
  options: {
    subject: string;
    onSuccess?: () => void;
    onError?: (message: string) => void;
    setSubmitting?: (value: boolean) => void;
  },
): Promise<boolean> {
  event.preventDefault();

  const form = event.currentTarget;
  const phoneError = validateFormPhones(form);
  if (phoneError) {
    options.onError?.(phoneError);
    return false;
  }

  const text = buildMailtoBody(form);
  const replyToField = form.querySelector<HTMLInputElement>('input[type="email"]')?.value;

  const result = await submitFormMessage(
    recaptcha,
    { subject: options.subject, text, replyTo: replyToField || undefined },
    { submitting: options.setSubmitting },
  );

  if (result.success === false) {
    options.onError?.(result.error);
    return false;
  }

  options.onSuccess?.();
  return true;
}
