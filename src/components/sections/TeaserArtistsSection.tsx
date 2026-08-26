import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { featureFlags } from '@/config/featureFlags';
import { contentConfig } from '@/config/content';

export const TeaserArtistsSection: React.FC = () => {
  if (!featureFlags.showArtistsSection) {
    return null; // Oculto hasta revelación pública oficial por feature flag
  }

  return (
    <SectionContainer id="artistas" theme="navy">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-[var(--color-accent-gold)]">
          {contentConfig.album.teaserMessage}
        </p>
      </div>
    </SectionContainer>
  );
};
