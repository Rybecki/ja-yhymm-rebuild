import { useState } from 'react';

type PhoneInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  required?: boolean;
  id?: string;
  className?: string;
  'aria-invalid'?: boolean;
};

const PHONE_MAX_LENGTH = 15;

const INPUT_CLASS =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-white/40';

export function PhoneInput({
  value: valueProp,
  onChange: onChangeProp,
  name,
  required = false,
  id,
  className = '',
  'aria-invalid': ariaInvalid,
}: PhoneInputProps) {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = onChangeProp !== undefined;
  const value = isControlled ? (valueProp ?? '') : internalValue;
  const onChange = isControlled ? onChangeProp : setInternalValue;

  return (
    <div className={className}>
      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        name={name}
        data-phone-input="true"
        required={required}
        placeholder="+48 500 111 000"
        maxLength={PHONE_MAX_LENGTH}
        value={value}
        onChange={(event) => onChange(event.target.value.slice(0, PHONE_MAX_LENGTH))}
        className={`${INPUT_CLASS} ${ariaInvalid ? 'border-red-400/80' : ''}`}
        aria-invalid={ariaInvalid}
        aria-label="Numer telefonu"
      />
    </div>
  );
}
