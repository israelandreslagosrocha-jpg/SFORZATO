import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentConfig } from '@/config/content';
import { brandConfig } from '@/config/brand';

export const ConceptSection: React.FC = () => {
  const { history } = contentConfig;

  return (
    <SectionContainer id="proyecto" className="py-24 sm:py-32 border-t border-white/5 relative">
      {/* Luz Ambiental Lateral Suave */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(229,192,88,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto flex flex-col gap-12 relative z-10">
        <SectionHeader
          label={history.label}
          title={history.title}
          align="left"
        />

        {/* Bloque Narrativo Editorial en Tarjeta de Cristal Líquido */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-[var(--color-text-cream)] font-light leading-relaxed text-lg sm:text-xl md:text-2xl">
            {history.bodyParagraphs.map((paragraph, index) => (
              <p key={index} className="font-serif-editorial leading-relaxed text-white/95">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tarjeta de Reconocimiento y Homenaje */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent-gold)]/20 to-transparent border border-[var(--color-accent-gold)]/30 flex items-center justify-center text-[var(--color-accent-gold)] font-serif-editorial text-2xl font-bold shadow-[0_0_15px_rgba(229,192,88,0.15)]">
                NL
              </div>
              <div className="flex flex-col">
                <span className="font-serif-editorial text-2xl font-normal text-white">
                  {brandConfig.homage.personName}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-gold)] font-medium">
                  {brandConfig.homage.role}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-mono">
              <span>LEGADO HISTÓRICO</span>
              <span className="text-white/80 mt-0.5">{brandConfig.homage.departureDate}</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
