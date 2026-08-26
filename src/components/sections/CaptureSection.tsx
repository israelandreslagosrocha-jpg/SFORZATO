'use client';

import React, { useState } from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Input } from '@/components/ui/Input';
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
      setStatusMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Interfaz visual client-side (Sin backend/almacenamiento de PII en esta fase)
    setStatusMessage('¡Gracias por tu interés! Te notificaremos el día del estreno.');
    setEmail('');
  };

  return (
    <SectionContainer id="lanzamiento" theme="navy" className="py-20 md:py-28 border-t border-white/10">
      <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
        <SectionHeader
          label={capture.label}
          title={capture.title}
          description={capture.description}
          align="center"
          theme="dark"
        />

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
          <Input
            type="email"
            name="email"
            placeholder={capture.inputPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Correo electrónico para notificaciones de lanzamiento"
          />
          <Button type="submit" variant="primary" className="whitespace-nowrap">
            Notificarme el lanzamiento
          </Button>
        </form>

        {statusMessage && (
          <p role="status" className="text-xs tracking-wider text-[var(--color-accent-gold)] mt-2">
            {statusMessage}
          </p>
        )}
      </div>
    </SectionContainer>
  );
};
