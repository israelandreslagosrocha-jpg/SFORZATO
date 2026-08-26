# PROTOCOLO DE AUDITORÍA Y INTEGRACIÓN DE FOTOGRAFÍA REAL DEL HERO (FASE 7B) — SFORZATO MUSIC
**Procedimiento Estándar de Pre-Producción para Asset Editorial Real**  
**Fecha:** 26 de Agosto de 2026  
**Proyecto:** Landing Page "En Tu Memoria" — Sforzato Music  

---

## 1. ESTADO ACTUAL DE LA FASE 7B

- 🟢 **Fase 7A & 7A.1:** Cerradas y Aprobadas (Logo oficial integrado a 11.57 KB).
- 🟡 **Fase 7B:** En espera de la entrega de la fotografía real de estudio/producción por parte de Sforzato Music.

---

## 2. REGLA FUNDAMENTAL DE VERACIDAD FOTOGRÁFICA

Queda estrictamente **PROHIBIDO** el uso de fotografías generadas por Inteligencia Artificial, imágenes de stock o rostros ficticios en el Hero. Tratándose de una iniciativa musical basada en fe, historia, homenaje y testimonio real, únicamente se incorporarán activos fotográficos auténticos de las sesiones de producción de Sforzato Music.

---

## 3. PROTOCOLO DE AUDITORÍA (CUANDO SE RECIBA LA FOTOGRAFÍA REAL)

### FASE 1 — INSPECCIÓN TÉCNICA Y EDITORIAL
1. **Identificación del Asset Master:**
   - Formato original (JPEG / PNG / TIFF / WebP).
   - Dimensiones nativas en píxeles y relación de aspecto.
   - Peso total en disco.
   - Espacio negativo disponible y punto focal principal.
   - Legibilidad del texto principal sobre la imagen.

2. **Evaluación Responsive:**
   - Comportamiento en Mobile (`320px` - `414px`).
   - Comportamiento en Tablet (`768px`).
   - Comportamiento en Desktop Widescreen (`1024px` - `1440px`).

### FASE 2 — OPTIMIZACIÓN Y PERFORMANCE
- Conversión a formato de alta eficiencia WebP / AVIF.
- Generación de dimensiones explícitas para prevenir **CLS (Cumulative Layout Shift = 0)**.
- Medición del impacto potencial en **LCP (Largest Contentful Paint)**.

### FASE 3 — PRUEBA DE INTEGRACIÓN Y COMPOSICIÓN
- Integración en `HeroSection.tsx` preservando el equilibrio del Design DNA.
- Verificación del contraste de texto y cumplimiento del ratio WCAG 2.2 AA (mínimo 4.5:1).

### FASE 4 — VALIDACIÓN TÉCNICA OBLIGATORIA
```bash
npx tsc --noEmit
npm run lint
npx next build
```
- Re-captura de screenshots en: `375px`, `414px`, `768px`, `1024px`, `1440px`.

### FASE 5 — ENTREGA DE INFORME Y DETENCIÓN
- Creación de `docs/HERO_PHOTO_AUDIT.md`.
- No realizar commits ni push automáticos.
- Detención inmediata para revisión humana.
