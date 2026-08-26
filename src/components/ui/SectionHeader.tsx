import React from 'react';

export interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  description,
  align = 'left',
  theme = 'dark',
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const labelColor =
    theme === 'dark' ? 'text-[var(--color-accent-gold)]' : 'text-[var(--color-text-dark)]/70';
  const titleColor =
    theme === 'dark' ? 'text-[var(--color-text-white)]' : 'text-[var(--color-text-dark)]';
  const descColor =
    theme === 'dark' ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-dark)]/85';

  return (
    <div className={`flex flex-col gap-2.5 ${alignmentClass} ${className}`}>
      {label && (
        <span
          className={`text-xs font-semibold tracking-[0.2em] uppercase ${labelColor}`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-serif-editorial text-3xl md:text-5xl font-normal leading-[1.15] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xs md:text-sm tracking-[0.15em] uppercase font-medium mt-1 ${descColor}`}>
          {subtitle}
        </p>
      )}
      {description && (
        <p className={`text-base md:text-lg leading-relaxed mt-2 max-w-2xl ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};
