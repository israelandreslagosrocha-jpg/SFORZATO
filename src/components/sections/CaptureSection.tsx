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
    <SectionContainer id="lanzamiento" className="py-28 sm:py-40 border-t border-slate-200/60 relative">
      {/* Luz Central de Conversión */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.14)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-10 relative z-10">
        <SectionHeader
          label={capture.label}
          title={capture.title}
          description={capture.description}
          align="center"
        />

        <div className="w-full glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border-2 border-[#8C5E0A]/35 bg-white">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3.5 w-full">
            <div className="relative flex-1">
              <input
                type="email"
                name="email"
                placeholder={capture.inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Correo electrónico para notificaciones de lanzamiento"
                className="w-full px-5 py-3.5 sm:py-4 rounded-full bg-slate-50 border-2 border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#8C5E0A] focus:ring-2 focus:ring-[#8C5E0A]/30 transition-all text-sm font-medium shadow-inner"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
              Notificarme el lanzamiento
            </Button>
          </form>

          {statusMessage && (
            <p role="status" className="text-xs tracking-wider text-[#8C5E0A] mt-5 font-mono font-bold">
              {statusMessage}
            </p>
          )}

          <p className="text-[11px] text-slate-600 uppercase tracking-widest mt-6 font-mono font-medium">
            Te notificaremos exclusivamente cuando el álbum y documental estén disponibles.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
