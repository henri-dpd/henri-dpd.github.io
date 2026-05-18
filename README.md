# henri-dpd.github.io

Portfolio profesional de **Henri Daniel Peña** — Software Engineer.

🌐 **[henri-dpd.github.io](https://henri-dpd.github.io)**

---

## Stack

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router, `output: 'export'`) | 16.2.6 |
| Lenguaje | TypeScript | 5 |
| Estilos | Tailwind CSS (CSS-first `@theme`) | 4 |
| Iconos | lucide-react (**versión fijada**) | 0.447.0 |
| Tests | Vitest + Testing Library | 4.1.6 |
| Deploy | GitHub Pages (GitHub Actions) | — |

> **lucide-react 0.447.0 está fijado.** La v1.x no exporta `Github` ni `Linkedin`. No actualizar sin verificar las exportaciones nombradas.

---

## Inicio Rápido

```bash
git clone https://github.com/henri-dpd/henri-dpd.github.io.git
cd henri-dpd.github.io
npm install
cp .env.example .env.local   # Añadir NEXT_PUBLIC_FORMSPREE_ID
npm run dev                   # http://localhost:3000
```

---

## Comandos

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Exportación estática → /out
npm test             # 27 tests (Vitest, modo CI)
npm run test:watch   # Tests en modo interactivo
npm run lint         # ESLint
npx tsc --noEmit     # TypeScript type check
```

---

## Documentación

| Documento | Descripción |
|---|---|
| [docs/architecture.md](docs/architecture.md) | Stack, estructura de carpetas, componentes, decisiones de diseño |
| [docs/content-guide.md](docs/content-guide.md) | Cómo actualizar contenido, añadir roles, cambiar pilares |
| [docs/animations.md](docs/animations.md) | Keyframes, clases de utilidad, scroll-driven animations, acordeón CSS |
| [docs/testing.md](docs/testing.md) | Suite de tests, casos especiales, cómo añadir nuevos tests |
| [docs/deployment.md](docs/deployment.md) | GitHub Pages setup, CI/CD workflow, variables de entorno |
| [docs/seo.md](docs/seo.md) | Metadatos OG/Twitter, favicons, sitemap, robots |

---

## Contacto

- **Email:** [henridanielpenadequero@gmail.com](mailto:henridanielpenadequero@gmail.com)
- **LinkedIn:** [linkedin.com/in/henri-pena](https://linkedin.com/in/henri-pena)
- **GitHub:** [github.com/henri-dpd](https://github.com/henri-dpd)
