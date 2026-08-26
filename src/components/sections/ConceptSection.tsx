import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentConfig } from '@/config/content';
import { brandConfig } from '@/config/brand';

export const ConceptSection: React.FC = () => {
  const { history } = contentConfig;

  return (
    <SectionContainer id="proyecto" theme="cream" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <SectionHeader
          label={history.label}
          title={history.title}
          theme="light"
        />

        <div className="flex flex-col gap-6 text-[var(--color-text-dark)] font-light leading-relaxed text-base sm:text-lg md:text-xl">
          {history.bodyParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Legado & Trascendencia (Sin firma simulada) */}
        <div className="pt-6 mt-2 border-t border-[var(--color-text-dark)]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="font-serif-editorial text-xl font-normal text-[var(--color-text-dark)]">
              {brandConfig.homage.personName}
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--color-text-dark)]/70">
              {brandConfig.homage.role}
            </span>
          </div>
          <div className="text-xs uppercase tracking-wider text-[var(--color-text-dark)]/60">
            Homenaje a su legado musical
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
