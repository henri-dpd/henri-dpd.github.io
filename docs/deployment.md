# Deployment

El sitio se despliega automáticamente en GitHub Pages en cada push a `main`. El proceso completo está en `.github/workflows/deploy.yml`.

## Flujo CI/CD

checkout → setup Node 20 → `npm ci` → `npm run build` → upload `/out` → deploy a GitHub Pages

El secret `NEXT_PUBLIC_FORMSPREE_ID` se inyecta en el paso de build. Sin él, el formulario de contacto no funciona en producción pero el build no falla.

## Configuración Inicial (una vez por repositorio)

1. **Settings → Pages → Source**: seleccionar **"GitHub Actions"** (no "Deploy from a branch")
2. **Settings → Actions → General → Workflow permissions**: activar "Read and write permissions"
3. **Settings → Secrets and variables → Actions**: crear secret `NEXT_PUBLIC_FORMSPREE_ID` con el ID de Formspree

## Variables de Entorno

| Variable | Dónde configurar | Descripción |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | `.env.local` (local) / Secret de GitHub (CI) | ID del formulario Formspree |

La plantilla está en `.env.example`. El archivo `.env.local` está en `.gitignore`.

## Previsualizar el Build Localmente

`next start` no funciona con `output: export`. Para previsualizar el output estático:

```bash
npm run build
npx serve out
```

## Notas de Compatibilidad con GitHub Pages

- **`.nojekyll`** en `public/`: sin este archivo, GitHub Pages ignora `_next/static/` porque Jekyll omite carpetas que empiezan con `_`.
- **`trailingSlash: true`**: genera `ruta/index.html` en lugar de `ruta.html`. Requerido para que las URLs funcionen en GitHub Pages sin 404.
- **`images.unoptimized: true`**: el Image Optimization API de Next.js requiere servidor Node. No disponible en exportación estática.
- **`sitemap.ts` y `robots.ts`** requieren `export const dynamic = "force-static"` o el build falla con `output: export`.

## Rollback

Revertir con `git revert <hash>` y hacer push. No usar `git push --force` ni `git reset --hard` en commits ya publicados.
