# ARQUITECTURA TÉCNICA DEL PROYECTO — SFORZATO MUSIC
**Documento de Arquitectura de Configuración y Componentes Base (Fase 3)**  
**Fecha:** 25 de Agosto de 2026  
**Proyecto:** Landing Page "En Tu Memoria" — Sforzato Music  

---

## 1. ESTRUCTURA DEL ÁRBOL DE ARCHIVOS
El proyecto sigue una arquitectura fuertemente desacoplada, modular y predecible:

```
SFORZATO/
├── docs/
│   ├── ARCHITECTURE.md       # Documento de arquitectura técnica (este archivo)
│   └── DESIGN_DNA.md         # Sistema de diseño visual y dirección artística
├── public/
│   └── assets/
│       └── brand/            # Directorio reservado para el logo oficial SVG/PNG
├── src/
│   ├── app/                  # App Router de Next.js (`output: 'export'`)
│   │   ├── globals.css       # Estilos globales e importación de tokens
│   │   ├── layout.tsx        # Layout raíz
│   │   └── page.tsx          # Montaje de secciones y layout
│   ├── components/
│   │   ├── layout/           # Componentes de estructura global (Header, Footer, Container)
│   │   ├── sections/         # Cáscaras de sección semánticas independientes
│   │   └── ui/               # Componentes UI básicos (Button, Input, SectionHeader)
│   ├── config/               # Módulos de configuración desacoplados
│   │   ├── brand.ts          # Datos de marca confirmados (Nombre, Lema, Homenaje)
│   │   ├── content.ts        # Textos confirmados por sección
│   │   ├── featureFlags.ts   # Banderas de características dinámicas
│   │   ├── navigation.ts     # Enlaces de navegación interna
│   │   ├── seo.ts            # Metadatos base y Open Graph
│   │   └── socials.ts        # Canales de redes sociales
│   ├── styles/
│   │   └── tokens.css        # Variables CSS nativas derivadas del Design DNA
│   └── types/
│       └── index.ts          # Tipos estrictos de TypeScript y Matriz de Contenido
├── .gitignore
├── next.config.ts            # Exportación estática (`output: 'export'`)
├── package.json
├── PROJECT_AUDIT.md
├── PROJECT_PLAN.md
└── tsconfig.json
```

---

## 2. RESPONSABILIDADES Y SEPARACIÓN DE CONTENIDO

### Matriz de Contenido (`ContentStatus`):
Todo contenido en `src/config/` se gobierna bajo 3 estados estrictos:
1. **`CONFIRMADO`:** Información oficial que puede renderizarse libremente.
2. **`PENDIENTE`:** Información estructural cuya URL o asset aún no ha sido provisto por el usuario (se representa como `null` o placeholder tipado controlado).
3. **`NO_UTILIZAR`:** Información prohibida (ej. nombres de canciones no lanzadas o nombres de artistas) que la aplicación NO expone en producción.

### Módulos de Configuración (`src/config/`):
- `brand.ts`: Centraliza la entidad *Sforzato Music*, el lema *"Impulsando música con propósito"* y el concepto bíblico (*Lucas 22:19*).
- `navigation.ts`: Define enlaces exclusivamente dirigidos a las anclas de la landing actual (`#inicio`, `#proyecto`, `#album`, `#produccion`, `#documental`).
- `socials.ts`: Controla los canales de Instagram y YouTube manteniendo estado `PENDIENTE` en URLs no provistas.
- `content.ts`: Contiene la copia textual confirmada. Ningún componente escribe texto fijo en JSX.
- `seo.ts`: Define el nombre del sitio, descripción meta y títulos Open Graph.
- `featureFlags.ts`: Activa o desactiva la renderización de bloques (ej. `showArtistsSection: false`).

---

## 3. LIBRERÍA DE COMPONENTES MÍNIMA

- **`Button.tsx`:** Botón semántico accesible con target táctil mínimo de 44px, variantes `primary` (Dorado), `secondary` (Crema) y `outline`.
- **`Input.tsx`:** Campo de entrada `type="email"` con estados visuales de interacción y soporte para validación client-side.
- **`SectionHeader.tsx`:** Componente editorial que combina sub-etiqueta en mayúsculas, título `<h2>` en Serif, subtítulo y párrafo descriptivo.
- **`SectionContainer.tsx`:** Contenedor `<section>` semántico con max-width de 1200px y temas del Design DNA (`navy`, `navy-hero`, `cream`).

---

## 4. ESTRATEGIA DE ASSETS Y FUENTES (FUTURA FASE 4)
- **Logo:** Si el logo oficial SVG aún no está en `/public/assets/brand/`, el componente de Header aplica un fallback tipográfico controlado con el nombre oficial.
- **Fuentes:** No se han descargado archivos de fuentes. Los tokens en `src/styles/tokens.css` especifican los candidatos (*Prata*, *Cormorant Garamond*, *Cinzel*, *Outfit*) que serán evaluados visualmente en la Fase 4.

---

## 5. CONEXIÓN CON LA FUTURA FASE 4 (IMPLEMENTACIÓN VISUAL)
Toda la infraestructura creada en la Fase 3 permite que en la Fase 4 el trabajo se enfoque exclusivamente en:
1. Afinar los estilos CSS Modules / Tailwind / CSS Custom Properties de cada sección.
2. Realizar la prueba tipográfica visual en canvas real.
3. Incorporar los activos reales de logo e imágenes cuando el usuario los suministre.
