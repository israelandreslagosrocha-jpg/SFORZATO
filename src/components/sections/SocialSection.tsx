import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { socialsConfig } from '@/config/socials';
import { featureFlags } from '@/config/featureFlags';

export const SocialSection: React.FC = () => {
  if (!featureFlags.showSocialLinks) {
    return null;
  }

  // Comprobar si existen URLs reales confirmadas
  const hasConfirmedUrls = socialsConfig.channels.some((channel) => channel.url !== null);

  return (
    <SectionContainer id="social" theme="navy" className="py-16 border-t border-white/10">
      <div className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-gold)] font-semibold">
          CANALES OFICIALES DE SFORZATO MUSIC
        </span>

        {hasConfirmedUrls ? (
          <div className="flex items-center justify-center gap-8 text-xs sm:text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
            {socialsConfig.channels.map((channel) =>
              channel.url ? (
                <a
                  key={channel.id}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={channel.ariaLabel}
                  className="hover:text-white transition-colors py-1"
                >
                  {channel.platform}
                </a>
              ) : null
            )}
          </div>
        ) : (
          <p className="text-xs sm:text-sm font-light leading-relaxed text-[var(--color-text-muted)]">
            Muy pronto podrás seguir las novedades de En Tu Memoria en Instagram y YouTube.
          </p>
        )}
      </div>
    </SectionContainer>
  );
};
