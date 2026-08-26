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
  className = '',
}) => {
  const isCenter = align === 'center';
  const alignmentClass = isCenter ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${alignmentClass} ${className}`}>
      {label && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-gold)]/10 border border-[var(--color-accent-gold)]/20 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-accent-gold)]">
            {label}
          </span>
        </div>
      )}
      <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-[var(--color-accent-gold)]/90 mt-0.5">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-[var(--color-text-muted)] mt-2">
          {description}
        </p>
      )}
    </div>
  );
};
