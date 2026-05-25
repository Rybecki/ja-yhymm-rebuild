export type RecaptchaVerifyResponse = {
  success: boolean;
  error?: string;
};

export async function verifyRecaptchaToken(token: string): Promise<RecaptchaVerifyResponse> {
  const response = await fetch('/api/recaptcha/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    return { success: false, error: 'Weryfikacja reCAPTCHA nie powiodła się.' };
  }

  const data = (await response.json()) as RecaptchaVerifyResponse;
  return data;
}
