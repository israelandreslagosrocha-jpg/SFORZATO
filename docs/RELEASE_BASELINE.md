# DOCUMENTO DE CIERRE Y RELEASE BASELINE (FASE 7G) — SFORZATO MUSIC
**Versión:** Pre-production Authority Landing (v1.0-baseline)  
**Dominio Oficial:** `https://sforzatomusic.cl`  
**Rama de Trabajo:** `actualizaciones` | **Rama `main`:** 🔒 Intacta  
**Fecha de Cierre:** 26 de Agosto de 2026  

---

## 1. ESTADO DEL PROYECTO

La landing page se encuentra en estado **🟢 RELEASE BASELINE (ESTABLE, PROFESIONAL Y MOSTRABLE)**.
- Cumple con los estándares de diseño editorial, tipografía (*Prata* + *Outfit*), paleta cromática (*Navy* `#0A111E`, *Cream* `#F4F1EA`, *Gold* `#D4AF37`), accesibilidad formal (**WCAG 2.2 AA**), responsive design (320px a 1440px) y SEO técnico con exportación estática nativa.

---

## 2. PROPÓSITO DE ESTA VERSIÓN

Esta versión **NO** es la campaña comercial final con venta o streaming, sino una **Pre-production Authority Landing** con el propósito de:
1. Otorgar presencia digital oficial a **Sforzato Music** y al proyecto **"En Tu Memoria"**.
2. Proyectar legitimidad, seriedad y dirección artística ante los **músicos y artistas que participarán en las próximas sesiones de grabación**.
3. Permitir compartir el enlace `https://sforzatomusic.cl` con colaboradores, familiares y contactos de la industria con total solvencia profesional.
4. Establecer una base técnica inmutable y libre de errores sobre la cual incorporar los activos reales a medida que se produzcan.

---

## 3. CONTROL DE RAMAS Y GIT

- **Rama de Trabajo:** `actualizaciones` (Local y remota en `origin/actualizaciones`).
- **Rama Principal:** 🔒 **`main` permanece completamente intacta** sin commits ni merges automáticos.
- **Seguridad:** 0 variables de entorno `.env`, 0 secretos o claves privadas expuestas.

---

## 4. INVENTARIO DE ASSETS DE MARCA

### A. Definitivos
- **Logo Oficial Web:** `/public/assets/brand/sforzato-music-logo-512.webp` (`11.57 KB`, ratio 1:1, densidad Retina).
- **Master Original de Archivo:** `/public/assets/brand/sforzato-music-logo.webp` (`272.91 KB`, 1024x1024px).

### B. Provisionales (Desacoplados y Controlados)
- **Hero Visual:** `/public/assets/brand/hero-image-provisional-ai.webp` (`28.36 KB`, ambiente de estudio sin rostros).
- **Portada Promocional:** `/public/assets/brand/en-tu-memoria-cover-provisional-ai.webp` (`53.24 KB`, oculta públicamente en UI vía `featureFlags.showAlbumCover: false`).
- **Social Preview Open Graph:** `/public/assets/brand/og-image-provisional-ai.webp` (`50.20 KB`, formato widescreen 1200x630px para enlaces de WhatsApp y redes).

---

## 5. FUNCIONALIDADES DELIBERADAMENTE PENDIENTES (CERO PROMESAS FALSAS)

1. **Captación de Correos / Backend:**
   - La interfaz mantiene el CTA *"Notificarme el lanzamiento"* con validación de sintaxis client-side y mensaje transparente: *“El registro oficial de notificaciones se habilitará con la campaña de lanzamiento.”*
   - No almacena PII ni simula bases de datos prematuras.
2. **Redes Sociales:**
   - Instagram y YouTube se muestran como declaración editorial sobria sin enlaces rotos `#` ni handles ficticios.
3. **Schema MusicAlbum:**
   - Omitido intencionadamente del JSON-LD hasta que el álbum esté publicado con metadatos reales.

---

## 6. VALIDACIONES TÉCNICAS EJECUTADAS

```bash
✓ npx tsc --noEmit        -> 0 errores
✓ npm run lint            -> 0 errores / 0 advertencias
✓ npx next build          -> Exportación estática 4/4 páginas prerenderizadas en /out
✓ HTML Verification       -> Canonical, Open Graph y Schema Organization verificados
```

---

## 7. RIESGOS CONOCIDOS Y MITIGADOS

| Riesgo Potencial | Estado de Mitigación |
| :--- | :--- |
| Confundir imagen IA con sesión real | **Mitigado:** Asset abstracto, sin rostros ni personas, nombrado como provisional. |
| Portada provisional asumida como oficial | **Mitigado:** Oculta en la UI pública por feature flag. |
| Layout Shift en carga (CLS) | **Mitigado:** Dimensiones explícitas reservadas en todos los contenedores (`0px CLS`). |
| Enlaces sociales rotos | **Mitigado:** Renderizados como texto estático informativo. |

---

## 8. CONDICIONES PARA REABRIR EL DESARROLLO

El código queda **CONGELADO**. Solo se reabrirá el desarrollo cuando ocurra uno de los siguientes hitos reales:
1. **Entrega de Fotografía Real de Estudio:** Sustitución de `hero-image-provisional-ai.webp`.
2. **Aprobación del Arte de Portada Definitivo:** Sustitución de portada y activación de `showAlbumCover: true`.
3. **Definición de Proveedor de Email y Política de Privacidad:** Conexión del endpoint seguro de suscripción.
4. **Creación Oficial de Canales Sociales:** Inserción de URLs reales de Instagram y YouTube.
