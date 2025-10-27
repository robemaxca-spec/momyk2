'use client';

import { useState } from 'react';

interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  placeholder?: string;
}

export default function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  required = false,
  textarea = false,
  rows = 4,
  placeholder,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const baseInputStyles =
    'w-full px-4 py-3 border-2 rounded-lg font-opensans transition-all duration-300 focus:outline-none';
  const inputStyles = error
    ? `${baseInputStyles} border-red-500 focus:border-red-600`
    : `${baseInputStyles} border-gray-300 focus:border-gold`;

  const labelStyles = `absolute left-4 transition-all duration-300 pointer-events-none font-poppins ${
    isFocused || value
      ? '-top-3 text-sm bg-white px-2 text-gold'
      : 'top-3 text-gray-500'
  }`;

  return (
    <div className="relative mb-6">
      <label htmlFor={name} className={labelStyles}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={rows}
          placeholder={placeholder}
          required={required}
          className={`${inputStyles} resize-none`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          className={inputStyles}
        />
      )}
      {error && (
        <p className="text-red-500 text-sm mt-1 font-opensans">{error}</p>
      )}
    </div>
  );
}
