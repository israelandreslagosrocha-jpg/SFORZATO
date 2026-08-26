import React from 'react';

export interface SectionContainerProps {
  id?: string;
  theme?: 'navy' | 'navy-hero' | 'cream' | 'obsidian' | 'studio';
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full py-20 sm:py-28 px-5 sm:px-8 overflow-hidden ${className}`}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto w-full relative z-10">
        {children}
      </div>
    </section>
  );
};
