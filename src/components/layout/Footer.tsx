import React from 'react';
import Image from 'next/image';
import { brandConfig } from '@/config/brand';
import { navigationConfig } from '@/config/navigation';
import { socialsConfig } from '@/config/socials';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { logoAsset } = brandConfig;

  return (
    <footer className="w-full bg-[var(--color-brand-navy)] text-[var(--color-text-white)] border-t border-white/10 pt-16 pb-12 px-5 md:px-8">
      <div className="max-w-[var(--container-max-width)] mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info with Official Logo */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={logoAsset.path}
                  alt={logoAsset.alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-editorial text-xl font-normal tracking-tight">
                  {brandConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-gold)]">
                  {brandConfig.motto}
                </span>
              </div>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] mt-2 font-light">
              {brandConfig.projectTagline}
            </p>
          </div>

          {/* Nav: El Proyecto */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-gold)]">
              {brandConfig.projectTitle}
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-muted)] font-light">
              {navigationConfig.footerNav.project.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav: Acerca de */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-gold)]">
              EL PROYECTO
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-muted)] font-light">
              {navigationConfig.footerNav.about.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-gold)]">
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
                      className="hover:text-white transition-colors"
                    >
                      {channel.platform}
                    </a>
                  ) : (
                    <span className="opacity-70">{channel.platform}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-[var(--color-text-muted)] font-light">
          © {currentYear} {brandConfig.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
