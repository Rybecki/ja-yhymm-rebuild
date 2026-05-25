export type SendFormEmailPayload = {
  subject: string;
  text: string;
  replyTo?: string;
  recaptchaToken?: string;
};

export type SendFormEmailResult =
  | { success: true; to: string }
  | { success: false; error: string };

const FORM_ENDPOINT =
  (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim() || '/api/forms/send';

export async function sendFormEmail(payload: SendFormEmailPayload): Promise<SendFormEmailResult> {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as { success?: boolean; to?: string; error?: string };

  if (!response.ok || !data.success) {
    return { success: false, error: data.error ?? 'Nie udało się wysłać formularza.' };
  }

  return { success: true, to: data.to ?? '' };
}
