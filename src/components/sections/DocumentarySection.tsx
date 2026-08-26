import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { contentConfig } from '@/config/content';

export const DocumentarySection: React.FC = () => {
  const { production, documentary } = contentConfig;

  return (
    <SectionContainer id="produccion" className="py-24 sm:py-32 border-t border-black/5 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* Card 1: Detrás de la Producción */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 flex flex-col justify-between gap-8 group shadow-md border-black/10">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]" />
              {production.label}
            </div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-slate-900 leading-tight">
              {production.title}
            </h3>
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mt-2">
              {production.description}
            </p>
          </div>

          <div className="pt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-700 font-semibold">
            <span>PROCESO CREATIVO & ARREGLOS</span>
            <span className="text-[var(--color-accent-gold)] font-bold">SFORZATO</span>
          </div>
        </div>

        {/* Card 2: Documental Audiovisual */}
        <div id="documental" className="glass-card rounded-3xl p-8 sm:p-12 flex flex-col justify-between gap-8 relative overflow-hidden group border-[var(--color-accent-gold)]/40 shadow-md">
          <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-[var(--color-accent-gold)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-4 relative z-10">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
              {documentary.subtitle}
            </div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-slate-900 leading-tight">
              {documentary.title}
            </h3>
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mt-2">
              {documentary.description}
            </p>
          </div>

          <div className="pt-6 border-t border-black/10 flex items-center justify-between relative z-10 text-xs font-mono uppercase tracking-widest font-semibold">
            <span className="text-slate-700">REGISTRO EN VIDEO</span>
            <span className="text-[var(--color-accent-gold)] font-bold bg-amber-50 px-3 py-1 rounded-full border border-[var(--color-accent-gold)]/40">
              PRÓXIMAMENTE
            </span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
