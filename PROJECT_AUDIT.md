# AUDITORÍA DEL PROYECTO: SFORZATO MUSIC — LANDING "EN TU MEMORIA"
**Fase 0.5: Auditoría Revisada, Análisis Visual, SEO 2026, Seguridad y Arquitectura**  
**Fecha:** 25 de Agosto de 2026  
**Proyecto:** Landing Page de Lanzamiento — Álbum "En Tu Memoria"  
**Marca:** Sforzato Music (“Impulsando música con propósito.”)  

---

## 1. RESUMEN EJECUTIVO Y JUSTIFICACIÓN DE ARQUITECTURA
El proyecto **Sforzato Music** emprende la fase inicial de su lanzamiento público mediante la landing page del álbum **"En Tu Memoria"**, una producción musical cristiana de alto nivel artístico, con base en Santiago de Chile y proyección internacional.

El concepto del álbum está fundado en Lucas 22:19 (*"Hagan esto en memoria de mí"*) y rinde homenaje al legado de **Nicolás Lagos** (cofundador, fallecido el 1 de octubre de 2024).

### Justificación de Next.js + Static Export (`output: 'export'`):
- **Razonamiento Real:** La adopción de Next.js se justifica **exclusivamente por la necesidad de contar con una arquitectura preparada para crecer en el futuro** (incorporando secciones independientes para artistas, producciones, documental, noticias y tienda) sin sacrificar rendimiento ni mantenibilidad.
- **Sin Servidor Innecesario:** En esta fase de landing coming-soon se utilizará la exportación estática (`output: 'export'`). Esto genera archivos HTML/CSS/JS puros listos para distribuirse globalmente a través de un CDN estático (como Cloudflare Pages o Vercel Edge), reduciendo los costos de infraestructura a cero y eliminando vectores de ataque a servidores Node.js.

---

## 2. ANÁLISIS DE LA REFERENCIA VISUAL ADJUNTA
A partir de la imagen de referencia aportada para la landing, se extrae la siguiente dirección de arte y composición (tomada como **hipótesis de trabajo y ritmo visual**, no como dogma ni contenido factual):

### Ritmo de Contrastes y Bloques de Secciones:
1. **Hero Section (Fondo Navy `#0D1420` / `#0A111E`):**
   - Disposición asimétrica en escritorio: Bloque de texto editorial a la izquierda con alta jerarquía y fotografía atmosférica de estudio a la derecha.
   - Título en Serif cinemática de alto contraste ("EN TU MEMORIA"), subtítulo en Sans-Serif mayúscula (*tracked*), párrafo narrativo y botón principal dorado.
2. **Sección Historia / El Proyecto (Fondo Crema Warm Light `#F4F1EA`):**
   - Transición visual drástica de la oscuridad del Hero a la calidez clara del relato histórico.
   - Composición de fotografía cuadrada de silueta a la izquierda y texto editorial con firma tipográfica a la derecha.
3. **Sección El Álbum (Fondo Navy `#0A111E`):**
   - Portada del álbum con gradiente de amanecer a la izquierda + Grid de 6 iconos dorados a la derecha (10 canciones, +5 artistas, Producido por Sforzato, Grabado en varios estudios, Mezclado por Sforzato, Masterización en Los Ángeles).
   - Recuadro de expectativa con borde dorado para el teaser de artistas.
4. **Sección Producción & Documental (Fondo Gris Neutro `#EFECE8`):**
   - Layout de 2 columnas combinadas: Detrás de escena de consolas de mezcla + Proceso del documental.
5. **Sección Captación / Coming Soon (Fondo Navy Texturizado):**
   - Banner de alta concentración con icono de correo en dorado, título evocador y campo de entrada simple.
6. **Footer (Fondo Navy `#0A111E`):**
   - Logo oficial de Sforzato + columnas de navegación limpias e iconos de Instagram/YouTube.

---

## 3. ANÁLISIS DE TIPOGRAFÍA (EVALUACIÓN DE FUENTES LOCALES VS GOOGLE FONTS)
Se descarta la propuesta automática por defecto ("Inter + Cormorant"). En su lugar, se evalúa:

1. **Implementación Moderna via `next/font`:**
   - Queda totalmente prohibido el paquete heredado `@next/font`. Se utilizará la API nativa `next/font/google` o `next/font/local`.
2. **Evaluación de Fuentes Locales (Recomendado):**
   - Se recomienda alojar los archivos WOFF2 de las fuentes directamente en `/public/fonts/` usando `next/font/local`.
   - **Beneficios:** Cero peticiones a servidores de terceros (Google), mayor privacidad, cero bloqueo de renderizado externo, rendimiento garantizado offline.
3. **Propuesta Tipográfica Basada en la Referencia y el Logo:**
   - **Título Principal (Editorial Serif):** *Cinzel*, *Playfair Display* o fuente local Serif de alto contraste que refleje la solemnidad del título "EN TU MEMORIA".
   - **Cuerpo y Subtítulos (Sans-Serif):** *Outfit* o *Plus Jakarta Sans* para mantener máxima legibilidad en pantallas móviles pequeñas.
   - **Acentos / Firma (Script sutil):** Fuente script reservada exclusivamente para la firma de Nicolás Lagos.

---

## 4. SISTEMA DE COLOR (PALETA PROVISIONAL)
La paleta no se considera dogmática hasta procesar el logo oficial en vector. Se establece la siguiente hipótesis basada en la referencia:

- **Navy Principal:** `hsl(218, 52%, 8%)` (`#0A111E` / `#0D1420`)
- **Crema de Transición:** `hsl(40, 25%, 94%)` (`#F4F1EA`)
- **Dorado Accent:** `hsl(42, 58%, 53%)` (`#D4AF37` / `#C59B4E`)
- **Texto Principal:** `hsl(0, 0%, 98%)` (`#FAFADA`) en fondos oscuros / `hsl(218, 52%, 12%)` en fondos claros.
- **Gris Secundario:** `hsl(218, 15%, 65%)` (`#8E9AAF`)

---

## 5. COMPONENTES UI REALES (SIN SOBREARQUITECTURA)
Se elimina cualquier componente innecesario como `Modal.tsx`. La librería UI inicial se limita estrictamente a:

```
src/components/ui/
├── Button.tsx        (Botón primario dorado / secundario outline)
├── Input.tsx         (Campo de captación de correo)
└── SectionHeader.tsx (Títulos y sub-etiquetas doradas)
```

---

## 6. MODULARIDAD DE CONFIGURACIÓN
Se descentraliza `siteConfig.ts` en archivos de dominio independientes para mantener la mantenibilidad:

```
src/config/
├── brand.ts        (Nombre, lema, manifiesto)
├── navigation.ts   (Secciones del header y footer)
├── socials.ts      (Instagram, YouTube, extensible)
├── content.ts      (Textos confirmados por sección)
├── seo.ts          (Metadatos base, Open Graph)
└── featureFlags.ts (Control de revelación de artistas y documental)
```

---

## 7. MATRIZ DE CLASIFICACIÓN DE CONTENIDO
Para evitar cualquier invención de datos en el desarrollo, el contenido se clasifica de la siguiente manera:

| Categoria | Estado | Elementos |
| :--- | :--- | :--- |
| **🟢 CONFIRMADO** | Utilizar tal cual | Nombre Sforzato Music, Lema, Título "En Tu Memoria", Cita Lucas 22:19, Homenaje a Nicolás Lagos (fallecido 01/10/2024), 10 canciones, +5 artistas, Mezcla/Producción Sforzato, Masterización Los Ángeles, Existencia de Documental, Instagram/YouTube. |
| **🟡 PENDIENTE** | Reservar espacio / Placeholder técnico | Logo vector en alta resolución, Foto/Arte de portada oficial, Video Teaser oficial de YouTube, Enlaces definitivos a perfiles sociales. |
| **🔴 NO UTILIZAR** | Prohibido incluir | Nombres de artistas, lista de canciones, fechas exactas de lanzamiento, URLs de Spotify/Apple Music no lanzadas, fotografías falsas de stock presentadas como reales. |

---

## 8. ESTRATEGIA DEL FORMULARIO Y PRIVACIDAD DE DATOS
1. **Fase Inicial (Visual & Cliente):** 
   - El formulario operará únicamente como interfaz visual (*interaction state*) con validación de formato client-side.
   - **NO se construirá backend, API Routes ni integración con proveedores de correo (Resend/Mailchimp)** hasta que se definan la política de privacidad, el responsable del tratamiento de datos y la jurisdicción aplicable.
2. **Evaluación de Flujo de Datos (Seguridad Preventiva):**
   - **Entrada:** Campo de texto con `type="email"`, atributos `autocomplete="email"`.
   - **Validación:** Regex estricta client-side + prevención de inyección HTML/scripts.
   - **Transporte:** HTTPS exclusivo en producción.
   - **Almacenamiento / Proveedor:** Se integrará únicamente cuando la política de privacidad esté redactada y aprobada.

---

## 9. CORRECCIÓN DE ESTRATEGIA SEO 2026
- **Descartado:** `meta keywords` (Atributo obsoleto sin impacto positivo).
- **Prioridades SEO:**
  - Archivos `<title>` dinámicos y descripciones meta con intención de búsqueda clara.
  - Generación de `canonical` URLs, Open Graph y Twitter Card metadatos.
  - Jerarquía semántica de encabezados (`<h1>` único en el Hero, `<h2>` por sección).
  - Generación estática de `sitemap.xml` y `robots.txt`.
  - Atributos `alt` descriptivos en todas las imágenes.

---

## 10. REVISIÓN DE ESTRUCTURA SCHEMA (`MusicAlbum`)
- **Regla:** El marcado JSON-LD representará únicamente información visible y verificable.
- **Propiedades Schema Autorizadas:**
  - `@type`: `MusicAlbum`
  - `name`: "En Tu Memoria"
  - `byArtist`: `{ "@type": "MusicGroup", "name": "Sforzato Music" }`
  - `albumProductionType`: `StudioAlbum`
  - `numTracks`: 10
- **Propiedades Omitidas (Hasta Confirmación):** `track`, `releaseDate`, `image` (hasta tener la portada oficial).

---

## 11. REVISIÓN DE CRITERIOS DE PERFORMANCE Y PERFORMANCE REALISTA
- **Objetivo Realista:** **Core Web Vitals: GOOD** en herramientas de medición estándar.
- **Estrategia de Carga:**
  - No se aplicará *lazy loading* a secciones HTML normales (evita sobreesfuerzo de JavaScript en el DOM).
  - Optimización enfocada en recursos pesados: imágenes optimizadas mediante `next/image` en WebP/AVIF, poster para el iframe del video del documental, y diferimiento de scripts secundarios.

---

## 12. OBJETIVO DE ACCESIBILIDAD ACTUALIZADO (WCAG 2.2 AA)
Se adopta **WCAG 2.2 AA** como estándar de calidad visual y funcional:
- Contraste de color mínimo 4.5:1 en texto normal.
- Anillo de enfoque visible (`:focus-visible`) para navegación con teclado.
- Áreas de interacción táctil mínimas de 44x44px en mobile.
- Respeto explícito a `prefers-reduced-motion`.

---

## 13. REQUISITOS DE SEGURIDAD TÉCNICA (SISTEMÁTICOS)
Se elimina la evaluación por letras ("A+") y se establecen controles técnicos verificables:
- Regla absoluta: `NO SECRETS IN FRONTEND`.
- Cabeceras HTTP configuradas en exportación/despliegue: `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`.
- Auditoría de dependencias mediante `npm audit`.

---

## 14. INCLUSIÓN DE FASE DE MEDICIÓN Y ANALYTICS
Se agrega una fase dedicada a la analítica respetando la privacidad del usuario:
- Medición de clics a canales externos (YouTube e Instagram).
- Tracking de interacciones en el botón CTA.
- Sin cookies de rastreo invasivas; integración compatible con GDPR/CCPA.

---

## 15. DECISIONES Y AUTORIZACIONES REQUERIDAS
Antes de iniciar la Fase 1:
1. ¿Aprobar el plan revisado de la **Fase 0.5**?
2. ¿Autorizar la creación de la rama `feature/phase-1-landing-setup` en Git local para comenzar la estructura estática?
