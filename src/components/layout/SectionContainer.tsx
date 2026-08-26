import React from 'react';

export interface SectionContainerProps {
  id?: string;
  theme?: 'navy' | 'navy-hero' | 'cream';
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  theme = 'navy',
  children,
  className = '',
}) => {
  const themeStyles = {
    navy: 'bg-[var(--color-brand-navy)] text-[var(--color-text-white)]',
    'navy-hero': 'bg-[var(--color-brand-navy-hero)] text-[var(--color-text-white)]',
    cream: 'bg-[var(--color-brand-cream)] text-[var(--color-text-dark)]',
  };

  return (
    <section
      id={id}
      className={`w-full py-16 md:py-24 px-5 md:px-8 ${themeStyles[theme]} ${className}`}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto w-full">
        {children}
      </div>
    </section>
  );
};
