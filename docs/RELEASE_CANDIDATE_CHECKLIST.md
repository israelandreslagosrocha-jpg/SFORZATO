# RELEASE CANDIDATE & PRE-PRODUCCIÓN (CHECKLIST FASE 7) — SFORZATO MUSIC
**Estado del Proyecto:** 🟢 Fase 6 Cerrada | 🟡 Release Candidate Preparada (Pendiente de Assets Reales)  
**Dominio Oficial:** `https://sforzatomusic.cl`  
**Fecha:** 25 de Agosto de 2026  

---

## 1. ESTADO ACTUAL DE LA LANDING PAGE

La infraestructura técnica, el diseño visual (Design DNA), la accesibilidad formal (WCAG 2.2 AA), la sanitización client-side y el SEO On-Page están **100% construidos y validados con 0 errores** en la rama `feature/phase-1-landing-setup`.

### Validaciones Técnicas de Fase 6 Completadas:
- `✓ npx tsc --noEmit` (0 errores)
- `✓ npm run lint` (0 errores)
- `✓ npx next build` (4/4 páginas estáticas + robots.txt + sitemap.xml prerenderizados en /out)

---

## 2. CHECKLIST DE PRE-PRODUCCIÓN PARA RECURSOS REALES (FASE 7)

Cuando el equipo de Sforzato Music disponga de los activos de marca oficiales, se ejecutará el siguiente procedimiento de pre-producción previo a la publicación abierta:

### A. Assets de Marca y Fotografías Promocionales
- [ ] **Logo Oficial SVG:** Reemplazar el fallback de texto `SFORZATO MUSIC` en Header y Footer por el archivo vectorial en `/public/assets/brand/`.
- [ ] **Fotografía Principal del Hero:** Sustituir la composición gráfica abstracta por la fotografía oficial seleccionada de la sesión en estudio.
- [ ] **Arte de Portada Oficial:** Incorporar la imagen definitiva del álbum cuando sea liberada.
- [ ] **Open Graph Image (`og:image`):** Configurar la imagen oficial de previsualización social (`1200x630px`) para compartición en WhatsApp, Instagram y redes.

### B. Canales Sociales & Dominio
- [ ] **URLs Oficiales de Redes:** Vincular las direcciones definitivas de Instagram (`@sforzatomusic`) y el canal de YouTube.
- [ ] **Configuración DNS & HTTPS:** Verificar el apuntamiento del dominio `sforzatomusic.cl` en el hosting estático.
- [ ] **Google Search Console:** Dar de alta la propiedad `https://sforzatomusic.cl` e integrar el `sitemap.xml`.

### C. Capturación de Emails & Privacidad
- [ ] **Proveedor de Captura de Correos:** Conectar el endpoint seguro de backend / proveedor de email (ej. Mailchimp, Resend, ConvertKit).
- [ ] **Política de Privacidad & Consentimiento:** Incorporar el texto legal de protección de datos y casilla de verificación de consentimiento explícito según normativa vigente.
- [ ] **Prueba de Conversión End-to-End:** Enviar un registro de prueba y confirmar la recepción del correo de notificación.

### D. Auditoría Final de Performance Real (Lighthouse / CWV)
- [ ] Medir **LCP** (Largest Contentful Paint), **INP** (Interaction to Next Paint) y **CLS** (Cumulative Layout Shift) sobre el servidor con las imágenes reales optimizadas.

---

## 🛑 REGLA DE DESPLIEGUE EN GIT

- **Estado de Git:** `0 commits` / `0 push` realizados automáticamente.
- **Procedimiento:** El commit y push hacia la rama principal/remoto se ejecutará **únicamente tras la aprobación explícita humana** del usuario.
