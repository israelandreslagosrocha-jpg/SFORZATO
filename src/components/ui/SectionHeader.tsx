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
    <div className={`flex flex-col gap-4 sm:gap-5 max-w-3xl ${alignmentClass} ${className}`}>
      {label && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-[#8C5E0A]/30 shadow-xs mb-1">
          <span className="w-2 h-2 rounded-full bg-[#8C5E0A]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#8C5E0A]">
            {label}
          </span>
        </div>
      )}
      <h2
        className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 tracking-normal"
        style={{ lineHeight: '1.25' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm tracking-[0.18em] uppercase font-bold text-[#8C5E0A] mt-1">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-700 mt-2">
          {description}
        </p>
      )}
    </div>
  );
};
