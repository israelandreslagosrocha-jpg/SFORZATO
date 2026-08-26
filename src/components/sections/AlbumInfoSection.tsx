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
    <SectionContainer id="album" className="py-24 sm:py-32 border-t border-white/5 relative">
      {/* Luz Ambiental de Fondo */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(229,192,88,0.07)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
        <SectionHeader
          label={album.subtitle}
          title={album.title}
          subtitle="Una reinterpretación solemne y contemporánea"
          align="left"
        />

        {/* Lead Narrative */}
        <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/90 font-serif-editorial max-w-3xl">
          Una producción de <span className="text-[var(--color-accent-gold)] font-normal">{album.songCount} canciones</span> que reúne a destacados artistas y grupos cristianos para reinterpretar alabanzas que han marcado generaciones.
        </p>

        {/* Optional Provisional Album Cover Preview when feature flag is toggled */}
        {featureFlags.showAlbumCover && (
          <div className="flex justify-center my-4">
            <div className="relative w-full max-w-sm aspect-square glass-card rounded-3xl overflow-hidden p-3 group">
              <Image
                src={coverProvisionalAsset.path}
                alt={coverProvisionalAsset.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent-gold)] font-mono bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-[var(--color-accent-gold)]/30">
                  ARTE PROMOCIONAL PROVISIONAL
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bento Grid: Fichas Técnicas de Estudio de Alta Fidelidad */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1: Producción y Mezcla */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-mono font-semibold">
                PRODUCCIÓN & MEZCLA
              </span>
              <div className="flex items-end gap-1 h-3">
                <span className="w-0.5 bg-[var(--color-accent-gold)] rounded-full animate-wave-1" />
                <span className="w-0.5 bg-[var(--color-accent-gold)] rounded-full animate-wave-3" />
                <span className="w-0.5 bg-[var(--color-accent-gold)] rounded-full animate-wave-5" />
              </div>
            </div>
            <div>
              <span className="font-serif-editorial text-2xl text-white block">
                {album.production}
              </span>
              <span className="text-xs text-[var(--color-text-muted)] font-light mt-1 block">
                Dirección artística y arreglos originales
              </span>
            </div>
          </div>

          {/* Card 2: Grabación */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-mono font-semibold">
                SESIONES EN ESTUDIO
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-gold)]/50" />
            </div>
            <div>
              <span className="font-serif-editorial text-2xl text-white block">
                {album.recording}
              </span>
              <span className="text-xs text-[var(--color-text-muted)] font-light mt-1 block">
                Captura acústica e instrumental en vivo
              </span>
            </div>
          </div>

          {/* Card 3: Masterización */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-mono font-semibold">
                MASTERIZACIÓN
              </span>
              <span className="text-[10px] font-mono text-[var(--color-accent-gold)] bg-[var(--color-accent-gold)]/10 px-2 py-0.5 rounded-full border border-[var(--color-accent-gold)]/20">
                HI-RES
              </span>
            </div>
            <div>
              <span className="font-serif-editorial text-2xl text-white block">
                {album.mastering}
              </span>
              <span className="text-xs text-[var(--color-text-muted)] font-light mt-1 block">
                Finalización en estándar para plataformas
              </span>
            </div>
          </div>
        </div>

        {/* Expectativa de Artistas en Vitrina Editorial */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-l-4 border-l-[var(--color-accent-gold)]">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-semibold font-mono">
              PARTICIPANTES & COLABORADORES
            </span>
            <p className="font-serif-editorial text-xl sm:text-2xl text-white/95 italic">
              &ldquo;{album.teaserMessage}&rdquo;
            </p>
          </div>
          <span className="text-xs uppercase tracking-widest text-[var(--color-accent-gold)] font-mono whitespace-nowrap bg-[var(--color-accent-gold)]/10 px-4 py-2 rounded-full border border-[var(--color-accent-gold)]/30">
            PRÓXIMAMENTE
          </span>
        </div>
      </div>
    </SectionContainer>
  );
};
