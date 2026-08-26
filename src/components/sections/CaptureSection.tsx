'use client';

import React, { useState } from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { contentConfig } from '@/config/content';

export const CaptureSection: React.FC = () => {
  const { capture } = contentConfig;
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!sanitizedEmail || !emailRegex.test(sanitizedEmail)) {
      setStatusMessage('Por favor ingresa un formato de correo electrónico válido.');
      return;
    }

    // Respuesta honesta y transparente de preproducción
    setStatusMessage(
      'El registro oficial de notificaciones se habilitará con la campaña de lanzamiento. ¡Gracias por acompañar a Sforzato Music!'
    );
    setEmail('');
  };

  return (
    <SectionContainer id="lanzamiento" className="py-24 sm:py-36 border-t border-black/5 relative">
      {/* Luz Central de Conversión */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.12)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
        <SectionHeader
          label={capture.label}
          title={capture.title}
          description={capture.description}
          align="center"
        />

        <div className="w-full glass-card rounded-3xl p-8 sm:p-10 shadow-xl border-[var(--color-accent-gold)]/35 bg-white/95">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="relative flex-1">
              <input
                type="email"
                name="email"
                placeholder={capture.inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Correo electrónico para notificaciones de lanzamiento"
                className="w-full px-5 py-4 rounded-full bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[var(--color-accent-gold)] focus:ring-2 focus:ring-[var(--color-accent-gold)]/20 transition-all text-sm font-normal shadow-inner"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="whitespace-nowrap">
              Notificarme el lanzamiento
            </Button>
          </form>

          {statusMessage && (
            <p role="status" className="text-xs tracking-wider text-[var(--color-accent-gold)] mt-4 font-mono font-semibold">
              {statusMessage}
            </p>
          )}

          <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-6 font-mono">
            Te notificaremos exclusivamente cuando el álbum y documental estén disponibles.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
