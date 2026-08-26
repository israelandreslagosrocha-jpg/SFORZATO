import React from 'react';
import Image from 'next/image';
import { brandConfig } from '@/config/brand';
import { navigationConfig } from '@/config/navigation';
import { socialsConfig } from '@/config/socials';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { logoAsset } = brandConfig;

  return (
    <footer className="w-full bg-[#03050B] text-white border-t border-white/10 pt-20 pb-16 px-6 sm:px-8">
      <div className="max-w-[var(--container-wide-width)] mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8">
          {/* Brand Info with Official Logo */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-[var(--color-accent-gold)]/30 to-transparent border border-[var(--color-accent-gold)]/40 shadow-[0_0_15px_rgba(229,192,88,0.15)]">
                <Image
                  src={logoAsset.path}
                  alt={logoAsset.alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-editorial text-xl font-normal tracking-wide text-white">
                  {brandConfig.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-medium">
                  {brandConfig.motto}
                </span>
              </div>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed max-w-xs mt-1">
              {brandConfig.projectTagline}
            </p>
          </div>

          {/* Nav: El Proyecto */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-semibold">
              {brandConfig.projectTitle}
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-muted)] font-light">
              {navigationConfig.footerNav.project.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-white transition-colors py-0.5 inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav: Acerca de */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-semibold">
              EL PROYECTO
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-muted)] font-light">
              {navigationConfig.footerNav.about.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-white transition-colors py-0.5 inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-semibold">
              SÍGUENOS
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-muted)] font-light">
              {socialsConfig.channels.map((channel) => (
                <li key={channel.id}>
                  {channel.url ? (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={channel.ariaLabel}
                      className="hover:text-white transition-colors py-0.5 inline-block"
                    >
                      {channel.platform}
                    </a>
                  ) : (
                    <span className="opacity-60 py-0.5 inline-block">{channel.platform}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[var(--color-text-muted)] font-mono">
          <span>© {currentYear} {brandConfig.name}. Todos los derechos reservados.</span>
          <span className="text-[var(--color-accent-gold)]/80">SANTIAGO, CHILE</span>
        </div>
      </div>
    </footer>
  );
};
