import React from 'react';
import Image from 'next/image';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentConfig } from '@/config/content';
import { brandConfig } from '@/config/brand';
import { featureFlags } from '@/config/featureFlags';

export const AlbumInfoSection: React.FC = () => {
  const { album } = contentConfig;
  const { coverProvisionalAsset } = brandConfig;

  return (
    <SectionContainer id="album" theme="navy" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <SectionHeader
          label={album.subtitle}
          title={album.title}
          theme="dark"
        />

        {/* Narrative Prose Block & Optional Provisional Album Cover Preview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className={`${featureFlags.showAlbumCover ? 'md:col-span-8' : 'md:col-span-12'} flex flex-col gap-4`}>
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-[var(--color-text-white)]/90">
              Una producción de {album.songCount} canciones que reúne a destacados artistas y grupos cristianos para reinterpretar alabanzas que han marcado generaciones.
            </p>
          </div>

          {featureFlags.showAlbumCover && (
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[260px] aspect-square rounded.subtle overflow-hidden border border-[var(--color-border-gold)] shadow-xl group">
                <Image
                  src={coverProvisionalAsset.path}
                  alt={coverProvisionalAsset.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[9px] uppercase tracking-widest text-[var(--color-accent-gold)] font-mono">
                    ARTE PROMOCIONAL PROVISIONAL
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Integrated Secondary Technical Details */}
        <div className="py-6 border-y border-[var(--color-border-gold)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs md:text-sm tracking-wider uppercase text-[var(--color-text-muted)]">
          <div className="flex flex-col gap-1">
            <span className="text-[var(--color-accent-gold)] font-semibold text-[10px] tracking-widest">
              PRODUCCIÓN Y MEZCLA
            </span>
            <span className="text-[var(--color-text-white)]">{album.production}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[var(--color-accent-gold)] font-semibold text-[10px] tracking-widest">
              GRABACIÓN
            </span>
            <span className="text-[var(--color-text-white)]">{album.recording}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[var(--color-accent-gold)] font-semibold text-[10px] tracking-widest">
              MASTERIZACIÓN
            </span>
            <span className="text-[var(--color-text-white)]">{album.mastering}</span>
          </div>
        </div>

        {/* Expectativa de Artistas (Recuadro Editorial Sobrio) */}
        <div className="p-8 border border-[var(--color-border-gold)] bg-white/5 rounded.subtle flex flex-col gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-gold)] font-semibold">
            PARTICIPANTES
          </span>
          <p className="text-base sm:text-lg text-[var(--color-text-white)] font-light italic leading-relaxed">
            &ldquo;{album.teaserMessage}&rdquo;
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
