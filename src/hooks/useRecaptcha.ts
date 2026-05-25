import { useCallback, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { isRecaptchaDisabled } from '../config/recaptcha';
import { verifyRecaptchaToken } from '../lib/verifyRecaptcha';

const CAPTCHA_ERROR = 'Nie udało się zweryfikować reCAPTCHA. Odśwież stronę i spróbuj ponownie.';
const VERIFY_ERROR = 'Weryfikacja reCAPTCHA nie powiodła się. Spróbuj ponownie.';
const RECAPTCHA_ACTION = 'submit';

export function useRecaptcha() {
  const disabled = isRecaptchaDisabled();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const isReady = disabled || Boolean(executeRecaptcha);

  const acquireToken = useCallback(async (): Promise<string | null> => {
    if (disabled) return null;
    if (!executeRecaptcha) {
      setError('Trwa ładowanie zabezpieczenia reCAPTCHA. Spróbuj za chwilę.');
      return null;
    }

    setIsVerifying(true);
    try {
      const token = await executeRecaptcha(RECAPTCHA_ACTION);
      if (!token) {
        setError(CAPTCHA_ERROR);
        return null;
      }
      setError(null);
      return token;
    } catch {
      setError(CAPTCHA_ERROR);
      return null;
    } finally {
      setIsVerifying(false);
    }
  }, [disabled, executeRecaptcha]);

  const assertVerified = useCallback(async (): Promise<boolean> => {
    if (disabled) return true;

    const token = await acquireToken();
    if (!token) return false;

    const result = await verifyRecaptchaToken(token);
    if (!result.success) {
      setError(result.error ?? VERIFY_ERROR);
      return false;
    }

    setError(null);
    return true;
  }, [disabled, acquireToken]);

  const reset = useCallback(() => {
    setError(null);
    setIsVerifying(false);
  }, []);

  return {
    disabled,
    isReady,
    isVerified: isReady,
    isVerifying,
    error,
    acquireToken,
    assertVerified,
    reset,
    clearError: () => setError(null),
  };
}

export type UseRecaptchaReturn = ReturnType<typeof useRecaptcha>;
