import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || (props.name ? `input-${props.name}` : undefined);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`min-h-[48px] px-4 py-2.5 bg-white/5 border border-[var(--color-text-muted)]/30 rounded.subtle text-[var(--color-text-white)] placeholder:[var(--color-text-muted)]/60 focus-visible:outline-none focus-visible:border-[var(--color-accent-gold)] focus-visible:ring-1 focus-visible:ring-[var(--color-accent-gold)] transition-colors ${className}`}
        {...props}
      />
      {error && (
        <span role="alert" className="text-xs text-red-400 mt-1">
          {error}
        </span>
      )}
    </div>
  );
};
