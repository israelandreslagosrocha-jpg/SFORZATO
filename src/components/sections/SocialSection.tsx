import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { socialsConfig } from '@/config/socials';
import { featureFlags } from '@/config/featureFlags';

export const SocialSection: React.FC = () => {
  if (!featureFlags.showSocialLinks) {
    return null;
  }

  const hasConfirmedUrls = socialsConfig.channels.some((channel) => channel.url !== null);

  return (
    <SectionContainer id="social" className="py-16 border-t border-white/5 relative">
      <div className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto glass-panel rounded-3xl p-8 border-white/5">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-semibold font-mono">
          CANALES OFICIALES DE SFORZATO MUSIC
        </span>

        {hasConfirmedUrls ? (
          <div className="flex items-center justify-center gap-8 text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
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
          <p className="text-sm font-light leading-relaxed text-[var(--color-text-muted)]">
            Muy pronto podrás seguir las novedades de En Tu Memoria en Instagram y YouTube.
          </p>
        )}
      </div>
    </SectionContainer>
  );
};
