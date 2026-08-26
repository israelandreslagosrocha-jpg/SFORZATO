import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentConfig } from '@/config/content';
import { brandConfig } from '@/config/brand';

export const ConceptSection: React.FC = () => {
  const { history } = contentConfig;

  return (
    <SectionContainer id="proyecto" className="py-24 sm:py-32 border-t border-black/5 relative">
      {/* Luz Ambiental Lateral Suave */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto flex flex-col gap-12 relative z-10">
        <SectionHeader
          label={history.label}
          title={history.title}
          align="left"
        />

        {/* Bloque Narrativo Editorial en Tarjeta de Cristal Blanco */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 flex flex-col gap-8 shadow-md">
          <div className="flex flex-col gap-6 text-slate-800 font-light leading-relaxed text-lg sm:text-xl md:text-2xl">
            {history.bodyParagraphs.map((paragraph, index) => (
              <p key={index} className="font-serif-editorial leading-relaxed text-slate-900">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tarjeta de Reconocimiento y Homenaje */}
          <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent-gold)]/20 to-white border border-[var(--color-accent-gold)]/40 flex items-center justify-center text-[var(--color-accent-gold)] font-serif-editorial text-2xl font-bold shadow-sm">
                NL
              </div>
              <div className="flex flex-col">
                <span className="font-serif-editorial text-2xl font-normal text-slate-900">
                  {brandConfig.homage.personName}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-gold)] font-semibold">
                  {brandConfig.homage.role}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end text-xs uppercase tracking-widest text-slate-600 font-mono">
              <span>LEGADO HISTÓRICO</span>
              <span className="text-slate-800 font-medium mt-0.5">{brandConfig.homage.departureDate}</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
