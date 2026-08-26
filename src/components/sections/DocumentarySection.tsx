import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentConfig } from '@/config/content';

export const DocumentarySection: React.FC = () => {
  const { production, documentary } = contentConfig;

  return (
    <SectionContainer id="produccion" theme="navy" className="py-20 md:py-28 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-stretch">
        {/* Production Philosophy */}
        <div className="flex flex-col justify-between gap-6 p-8 border border-white/10 bg-white/[0.02] rounded.subtle">
          <SectionHeader
            label={production.label}
            title={production.title}
            description={production.description}
            theme="dark"
          />
          <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-mono pt-4 border-t border-white/10">
            PROCESO CREATIVO & ARREGLOS
          </div>
        </div>

        {/* Documentary Teaser */}
        <div id="documental" className="flex flex-col justify-between gap-6 p-8 border border-[var(--color-border-gold)] bg-white/5 rounded.subtle">
          <SectionHeader
            label={documentary.subtitle}
            title={documentary.title}
            description={documentary.description}
            theme="dark"
          />
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent-gold)] font-semibold">
              REGISTRO AUDIOVISUAL
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent-gold)] font-bold">
              PRÓXIMAMENTE
            </span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
