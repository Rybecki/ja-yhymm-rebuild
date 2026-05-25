export const RECAPTCHA_V3_MIN_SCORE = 0.5;

export type GoogleRecaptchaResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  'error-codes'?: string[];
};

export async function verifyTokenWithGoogle(
  secretKey: string,
  token: string,
): Promise<{ success: boolean; error?: string }> {
  const params = new URLSearchParams({
    secret: secretKey,
    response: token,
  });

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = (await response.json()) as GoogleRecaptchaResponse;

  if (!data.success) {
    const codes = data['error-codes']?.join(', ');
    return {
      success: false,
      error: codes ? `reCAPTCHA: ${codes}` : 'Weryfikacja reCAPTCHA nie powiodła się.',
    };
  }

  if (typeof data.score === 'number' && data.score < RECAPTCHA_V3_MIN_SCORE) {
    return {
      success: false,
      error: 'Weryfikacja reCAPTCHA nie powiodła się. Spróbuj ponownie.',
    };
  }

  return { success: true };
}
