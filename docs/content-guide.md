# Guía de Contenido

Todo el contenido del portafolio vive en `src/data/portfolio.ts`. Para cambiar texto, añadir experiencia o modificar pilares, solo hace falta editar ese archivo — los componentes consumen los datos desde ahí sin hardcodear nada.

Las interfaces que describe cada dato están en `src/types/index.ts`.

## Qué hay en `portfolio.ts`

| Export | Qué es | Lo usa |
|---|---|---|
| `navLinks` | Items del menú de navegación | `Navbar` |
| `pillars` | 3 pilares técnicos | `PillarsSection` |
| `roles` | Historial de experiencia profesional | `ExperienceSection` |
| `writeupCards` | Tarjetas de producción técnica | `BlogSection` |
| `terminalStatus` | Líneas del mock terminal | `TerminalWidget` |
| `terminalSummary` | Resumen del mock terminal | `TerminalWidget` |

## Cómo Actualizar la Experiencia Profesional

Los `roles` son un array de objetos tipados con `Role` (ver `src/types/index.ts`). Campos relevantes:

- `current: true` — marca el rol activo. El acordeón lo abre por defecto. **Solo uno debe tener `true`.**
- `badges` — tecnologías del rol, se muestran como chips en el acordeón.
- El `id` debe ser único y en minúsculas — se usa como key de React y referencia interna.

Al cambiar de trabajo: poner `current: false` en el rol anterior, añadir el nuevo con `current: true`.

## Cómo Actualizar el Mock Terminal

`terminalStatus` y `terminalSummary` deben reflejar el stack y situación actual. Actualizarlos cuando cambie de rol o año.

## Añadir Contenido Real a Write-ups

Actualmente `BlogSection` enlaza a GitHub. Cuando exista contenido publicado (artículos, write-ups externos), hay dos opciones:

- **Links externos**: añadir un campo `href` a la interfaz `WriteupCard` en `types/index.ts` y usarlo en `BlogSection.tsx`.
- **Páginas internas**: crear `src/app/writeups/[slug]/page.tsx` con `generateStaticParams` para generación estática.

## Cómo Cambiar los Iconos de Pilares o Write-ups

Los componentes `PillarItem` y `WriteupCard` aceptan un campo `icon` que es un componente de `lucide-react`. Cambiar el import en `portfolio.ts` es suficiente. Ver los iconos disponibles en la versión 0.447.0 en [lucide.dev](https://lucide.dev) — tener en cuenta que algunos iconos de versiones recientes pueden no existir en la versión fijada.
