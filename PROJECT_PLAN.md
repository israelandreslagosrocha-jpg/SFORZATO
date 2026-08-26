# PLAN DE EJECUCIÓN DEL PROYECTO: SFORZATO MUSIC — LANDING "EN TU MEMORIA"
**Plan Maestro Aprobado con Reglas Obligatorias (Fase 0.5)**  
**Fecha:** 25 de Agosto de 2026  
**Proyecto:** Landing Page de Lanzamiento — Álbum "En Tu Memoria"  

---

## REGLAS OBLIGATORIAS DE DESARROLLO (REGLAS ORO)
1. **Seguridad y Static Export:** `output: 'export'` elimina la necesidad de un runtime Node.js en producción para esta fase y reduce la superficie de ataque asociada al servidor de aplicación.
2. **Estrategia de Imágenes:** `next/image` debe configurarse explícitamente para compatibilidad estática (`images: { unoptimized: true }` o loader personalizado).
3. **Formulario:** Únicamente interfaz visual client-side con validación estándar (`type="email"`). Cero backend, API Routes, Server Actions o almacenamiento hasta definir política de privacidad y proveedor.
4. **Analytics:** Cero proveedores reales instalados. Abstracción conceptual (`trackEvent`) sin envío de datos a terceros.
5. **Referencia Visual:** La imagen generada por el usuario es strictly referencia de dirección artística y composición. Fotografías, rostros, nombres o textos ficticios de la imagen NO se utilizarán en la web real.
6. **Logo de Marca:** El logo oficial de Sforzato Music debe provenir exclusivamente del archivo vector/PNG real entregado por el usuario.
7. **Fuentes:** Prohibido descargar fuentes arbitrariamente. Se utilizará el sistema nativo del navegador o fuentes licenciadas confirmadas.
8. **Mínima Dependencia:** No instalar librerías de UI, animación, iconos o utilidades sin justificar su necesidad explícita. Si CSS/SVG/Next.js pueden resolverlo, se resuelve de forma nativa.
9. **Arquitectura UI Mínima:** `Button`, `Input`, `SectionHeader`. Cero Modales, Carruseles o Cards genéricas.
10. **Configuración Modular:** `brand.ts`, `navigation.ts`, `socials.ts`, `content.ts`, `seo.ts`, `featureFlags.ts`.
11. **Matriz de Contenido:** Respeto absoluto a CONFIRMADO / PENDIENTE / NO UTILIZAR. Cero invención de datos.
12. **Mobile-First Real:** Desarrollo desde el viewport móvil más pequeño (320px+) hacia arriba. Breakpoints basados en el contenido, sin ocultar información crítica.
13. **Accesibilidad Target:** WCAG 2.2 AA.
14. **Performance:** Core Web Vitals GOOD. Prioridad en imagen LCP del Hero únicamente. Cero obsesión que comprometa la experiencia visual.
15. **SEO de Entidad e Intención:** Enfoque en la entidad Sforzato Music, el proyecto En Tu Memoria y el contexto del álbum. Sin meta keywords ni keywords forzadas.
16. **Schema Estricto:** Representará única y exclusivamente información visible y verificable en pantalla.
17. **Workflow Git:** Basado en rama de características (`feature/phase-1-landing-setup`), validación previa y Pull Request antes de mergear a `main`. Sin commits/push automáticos.

---

### FASE 1: PREPARACIÓN E INICIALIZACIÓN ESTRUCTURAL (SOLO CONFIGURACIÓN)
- **Objetivo:** Inicializar el repositorio Git y la estructura base de Next.js con exportación estática (`output: 'export'`) orientada a escalabilidad futura, sin construir UI ni visuales.
- **Tareas:**
  1. Inicializar Git local (`git init`) y vincular remoto `https://github.com/israelandreslagosrocha-jpg/SFORZATO.git`.
  2. Crear rama `feature/phase-1-landing-setup`.
  3. Crear `.gitignore` estandarizado.
  4. Inicializar Next.js + TypeScript + ESLint con `output: 'export'` e `images: { unoptimized: true }`.
  5. Crear estructura base de carpetas (`src/app/`, `src/config/`, `public/assets/brand/`).
  6. Crear README inicial.
  7. Ejecutar `npm run build` y `npm run lint` para validar compilación.
- **Archivos Afectados:** `.gitignore`, `package.json`, `tsconfig.json`, `next.config.mjs`, `README.md`.
- **Criterio de Aceptación:** Proyecto inicializado en la rama de características, compila limpiamente sin errores ni advertencias. **DETENERSE TRAS COMPLETAR.**

---

### FASE 2: SISTEMA VISUAL Y CONFIGURACIÓN DE FUENTES (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Establecer los tokens visuales y la carga de fuentes mediante la API moderna sin descargas externas arbitrarias.

---

### FASE 3: ARQUITECTURA DE CONFIGURACIÓN MODULAR (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Crear archivos de configuración desacoplados (`brand.ts`, `navigation.ts`, `socials.ts`, `content.ts`, `seo.ts`, `featureFlags.ts`) y componentes UI mínimos (`Button`, `Input`, `SectionHeader`).

---

### FASE 4: IMPLEMENTACIÓN DE SECCIONES (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Construir los componentes modulares de las 8 secciones respetando la matriz de contenido (Sin inventar datos).

---

### FASE 5: RESPONSIVE DESIGN Y BREAKPOINTS BASADOS EN CONTENIDO (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Adaptar la landing a dispositivos móviles con enfoque mobile-first real.

---

### FASE 6: SEO TÉCNICO Y ESQUEMA VERIFICABLE 2026 (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Metadatos dinámicos y JSON-LD de `MusicAlbum` (solo datos verificables).

---

### FASE 7: ACCESIBILIDAD UNIVERSAL WCAG 2.2 AA (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Cumplir con los estándares WCAG 2.2 AA.

---

### FASE 8: PERFORMANCE Y RECURSOS PESADOS (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Core Web Vitals GOOD.

---

### FASE 9: SEGURIDAD Y AISLAMIENTO (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Configuración de cabeceras HTTP en despliegue y auditoría.

---

### FASE 10: PRIVACIDAD Y ANALYTICS ABSTRACTO (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Abstracción `trackEvent` sin envío a terceros hasta definir proveedor y política.

---

### FASE 11: TESTING AUTOMATIZADO Y LINTING (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Validar TypeScript y ESLint.

---

### FASE 12: BROWSER REVIEW Y POLISH FINALES (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Ajuste visual cross-browser.

---

### FASE 13: WALKTHROUGH Y DOCUMENTACIÓN DE ENTREGA (PENDIENTE DE AUTORIZACIÓN)
- **Objetivo:** Presentación final para aprobación humana.
