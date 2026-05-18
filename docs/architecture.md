# Arquitectura

## Visión General

Sitio estático generado en build time con Next.js App Router (`output: export`). No hay servidor en runtime — todo el HTML/CSS/JS se genera en CI y se sirve desde GitHub Pages.

## Decisiones Clave

**Sin servidor en runtime**
La elección de `output: export` implica que no hay rutas API dinámicas ni SSR. Toda la data es estática y vive en `src/data/portfolio.ts`.

**Un solo archivo de contenido**
`src/data/portfolio.ts` es la única fuente de verdad para todo el contenido del sitio (roles, pilares, nav links, terminal). Los componentes importan desde allí directamente — ningún texto de negocio está hardcodeado en los componentes.

**`"use client"` mínimo**
Solo tres componentes son Client Components: `Navbar` (scroll listener), `ExperienceSection` (estado del acordeón) y `ContactSection` (estado del formulario). El resto son Server Components, lo que reduce el JS enviado al cliente.

**Tailwind v4 CSS-first**
No existe `tailwind.config.js`. El tema (colores, fuentes, breakpoints) se define en `src/app/globals.css` con `@theme`. Ver los valores actuales directamente en ese archivo.

**lucide-react fijado en 0.447.0**
La v1.x cambió el sistema de exportaciones y eliminó `Github` y `Linkedin` como exports nombrados. La versión está fijada en `package.json`. No actualizar sin verificar qué exports se usan en el proyecto.

**Animaciones sin dependencias JS**
Las animaciones de entrada al hacer scroll usan la API CSS nativa `animation-timeline: view()`, sin GSAP ni Framer Motion. Ver [animations.md](animations.md) para el detalle del sistema.

**Acordeón sin medición de altura en JS**
`ExperienceSection` anima la altura de los items usando el truco `grid-rows-[0fr]/[1fr]`. Esto evita el patrón habitual de medir `scrollHeight` con JS, que causa layout thrashing.

## Estructura de Carpetas

```
src/
├── app/           → Root layout, page, globals.css, sitemap.ts, robots.ts
├── components/    → Un archivo por sección/componente visual
├── data/          → portfolio.ts (contenido)
├── types/         → index.ts (interfaces TypeScript)
└── test/          → Tests unitarios por componente
public/
├── icons/         → Logos de marca en 4 resoluciones (128, 256, 512, 1024px)
└── .nojekyll      → Evita que GitHub Pages ignore la carpeta _next/
docs/              → Esta carpeta
.github/workflows/ → deploy.yml (CI/CD)
```

## Componentes por Sección

| Componente | Client | Comportamiento interactivo |
|---|---|---|
| `Navbar` | ✅ | Scroll → backdrop-blur; hamburger menu en mobile |
| `Footer` | — | Estático |
| `HeroSection` | — | Estático (animaciones CSS puras) |
| `TerminalWidget` | — | Estático, datos de `portfolio.ts` |
| `AboutSection` | — | Estático |
| `PillarsSection` | — | Estático |
| `ExperienceSection` | ✅ | Acordeón: un item abierto a la vez, `aria-expanded` |
| `BlogSection` | — | Estático |
| `ContactSection` | ✅ | Formulario: estados idle/sending/success/error, POST a Formspree |
