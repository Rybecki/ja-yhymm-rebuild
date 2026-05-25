export function getPhoneValidationError(value: string, required = true): string | null {
  if (!value.trim()) {
    return required ? 'Podaj numer telefonu.' : null;
  }
  return null;
}
