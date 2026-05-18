# SEO y Metadatos

## Estado Actual

| Feature | Estado | Dónde está |
|---|---|---|
| `<title>` + `<meta description>` | ✅ | `src/app/layout.tsx` |
| Open Graph (OG) | ✅ | `src/app/layout.tsx` — campo `openGraph` en `metadata` |
| Twitter Card | ✅ | `src/app/layout.tsx` — campo `twitter` en `metadata` |
| Favicons (múltiples tamaños) | ✅ | `src/app/layout.tsx` — campo `icons` en `metadata` |
| Apple Touch Icon | ✅ | `public/icons/icon-1024.png` |
| `sitemap.xml` | ✅ | `src/app/sitemap.ts` |
| `robots.txt` | ✅ | `src/app/robots.ts` |
| `metadataBase` | ✅ | Requerido para que Next.js genere URLs absolutas en etiquetas OG |
| Schema.org / JSON-LD | ❌ | No implementado |
| Canonical URL | ✅ | Implícito via `metadataBase` |

## Consideraciones de la Implementación

**`metadataBase` es obligatorio**
Sin él, Next.js no puede resolver las rutas relativas de las imágenes OG (ej. `/icons/icon-1024.png`) a URLs absolutas. Genera un warning en build si falta.

**`sitemap.ts` y `robots.ts` requieren `dynamic = "force-static"`**
Con `output: export`, los route handlers de App Router deben declararse estáticos explícitamente o el build falla. Ver ambos archivos.

**Imagen OG es cuadrada (1024×1024)**
Los validadores de LinkedIn y Facebook recomiendan 1200×630px (relación 1.91:1). La imagen actual es cuadrada y funciona, pero no llena el espacio del preview en redes sociales de forma óptima.

## Oportunidad: JSON-LD

Añadir un script `application/ld+json` de tipo `Person` en `layout.tsx` o `page.tsx` mejoraría la representación en resultados de búsqueda (rich snippets). Los campos clave serían `name`, `url`, `jobTitle` y `sameAs` con los perfiles de GitHub y LinkedIn. No requiere dependencias externas.

## Iconos de Marca

Los archivos `public/icons/icon-{128,256,512,1024}.png` sirven dos propósitos: favicon del navegador (referenciados en `metadata.icons`) y logo de marca en UI (usados en `Navbar` y `Footer` con `next/image`).
