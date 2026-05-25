import type { ReactNode } from 'react';
import { isRecaptchaDisabled } from '../config/recaptcha';
import type { UseRecaptchaReturn } from '../hooks/useRecaptcha';

type FormRecaptchaProps = {
  recaptcha: UseRecaptchaReturn;
  className?: string;
};

export function FormRecaptcha({ recaptcha, className = '' }: FormRecaptchaProps) {
  if (isRecaptchaDisabled() || recaptcha.disabled) {
    return null;
  }

  return <RecaptchaNotice recaptcha={recaptcha} className={className} />;
}

function RecaptchaNotice({ recaptcha, className = '' }: FormRecaptchaProps) {
  return (
    <div className={className}>
      <p className="text-xs text-white/50 leading-relaxed">
        Formularz chroniony przez reCAPTCHA. Obowiązują{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Polityka prywatności
        </a>{' '}
        i{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Warunki
        </a>{' '}
        Google.
      </p>
      {recaptcha.isVerifying ? (
        <p className="mt-2 text-sm text-white/60" aria-live="polite">
          Weryfikacja zabezpieczenia…
        </p>
      ) : null}
      {recaptcha.error ? (
        <p className="mt-2 text-sm text-red-400" role="alert">
          {recaptcha.error}
        </p>
      ) : null}
    </div>
  );
}

type FormSubmitButtonProps = {
  verified: boolean;
  verifying?: boolean;
  children: ReactNode;
  className?: string;
};

export function FormSubmitButton({
  verified,
  verifying = false,
  children,
  className = 'w-full btn-primary py-4 text-lg',
}: FormSubmitButtonProps) {
  const disabled = !verified || verifying;

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-dark`}
      aria-disabled={disabled}
    >
      {verifying ? 'Wysyłanie…' : children}
    </button>
  );
}

export function FormSubmitFeedback({ message, error }: { message?: string | null; error?: string | null }) {
  if (!message && !error) return null;
  return (
    <p className={`text-sm ${error ? 'text-red-400' : 'text-primary'}`} role="status">
      {error ?? message}
    </p>
  );
}
