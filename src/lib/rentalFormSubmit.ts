import type { FormEvent } from 'react';
import type { UseRecaptchaReturn } from '../hooks/useRecaptcha';
import { getPhoneValidationError } from './phoneValidation';
import { submitFormMessage } from './submitFormMessage';

export type FormFeedback = {
  success?: string | null;
  error?: string | null;
};

export async function submitRentalForm(
  event: FormEvent<HTMLFormElement>,
  recaptcha: UseRecaptchaReturn,
  options: {
    subject: string;
    body: string;
    replyTo?: string;
    phone?: string;
    setSubmitting: (value: boolean) => void;
    setFeedback: (feedback: FormFeedback) => void;
    onSuccess?: () => void;
  },
): Promise<void> {
  event.preventDefault();
  options.setFeedback({});

  const phoneError = options.phone ? getPhoneValidationError(options.phone) : null;
  if (phoneError) {
    options.setFeedback({ error: phoneError });
    return;
  }

  const result = await submitFormMessage(
    recaptcha,
    {
      subject: options.subject,
      text: options.body,
      replyTo: options.replyTo,
    },
    { submitting: options.setSubmitting },
  );

  if (result.success) {
    options.setFeedback({ success: 'Dziękujemy — wiadomość została wysłana.' });
    options.onSuccess?.();
    return;
  }

  if (result.success === false) {
    options.setFeedback({ error: result.error });
  }
}
