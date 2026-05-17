# henri-dpd.github.io

Sitio web personal y portafolio profesional de **Henri Daniel Peña** — Licenciado en Ciencia de la Computación, Ingeniero de Software Full Stack y Especialista en Ciberseguridad.

Desplegado en: [https://henri-dpd.github.io](https://henri-dpd.github.io)

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript 5 |
| Estilos | Tailwind CSS 4 |
| Iconos | lucide-react 0.447.0 |
| Formularios | Formspree |
| Tests | Vitest + Testing Library |
| Deploy | GitHub Pages (exportación estática) |

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css       # Variables de tema y fuentes (Tailwind v4 @theme)
│   ├── layout.tsx        # Layout raíz: Navbar + Footer + fuentes (Poppins/Inter)
│   └── page.tsx          # Página principal, ensambla todas las secciones
├── components/
│   ├── Navbar.tsx         # Navbar flotante con backdrop-blur, responsive
│   ├── Footer.tsx         # Footer con copyright y links sociales
│   ├── HeroSection.tsx    # Hero con badge, gradiente, stats y CTAs
│   ├── TerminalWidget.tsx # Mock terminal decorativo (lado derecho del hero)
│   ├── AboutSection.tsx   # Visión estratégica + 4 highlight cards
│   ├── PillarsSection.tsx # 3 pilares técnicos con hover effect
│   ├── ExperienceSection.tsx # Matriz de 6 roles con badges de tecnologías
│   ├── BlogSection.tsx    # 2 tarjetas de producción técnica (write-ups / guías)
│   └── ContactSection.tsx # Formulario Formspree + contacto directo
├── data/
│   └── portfolio.ts       # Toda la data del portafolio (roles, pilares, writeups)
├── types/
│   └── index.ts           # Interfaces TypeScript: Role, PillarItem, WriteupCard…
└── test/
    ├── setup.ts
    ├── layout.test.tsx
    ├── HeroSection.test.tsx
    ├── PillarsSection.test.tsx
    ├── ExperienceSection.test.tsx
    └── ContactSection.test.tsx
```

---

## Desarrollo Local

### Prerrequisitos

- Node.js 20+
- npm 10+

### Instalación

```bash
git clone https://github.com/henri-dpd/henri-dpd.github.io.git
cd henri-dpd.github.io
npm install
```

### Variables de Entorno

Copia el archivo de ejemplo y rellena tu ID de Formspree:

```bash
cp .env.example .env.local
```

```env
# .env.local
NEXT_PUBLIC_FORMSPREE_ID=tu_form_id_aqui
```

Regístrate en [formspree.io](https://formspree.io) para obtener tu ID gratuito.

### Comandos

```bash
npm run dev      # Servidor de desarrollo en http://localhost:3000
npm run build    # Build de producción → genera la carpeta /out
npm run test     # Ejecuta los 21 tests con Vitest (modo CI)
npm run test:watch  # Tests en modo interactivo
npm run lint     # Linter ESLint
```

---

## Despliegue en GitHub Pages

El proyecto está configurado para exportación estática (`output: 'export'`). El build genera la carpeta `/out` con HTML/CSS/JS estáticos sin necesidad de servidor Node.

El archivo `public/.nojekyll` evita que GitHub Pages ignore archivos con guión bajo (`_next/`).

### CI/CD Recomendado (GitHub Actions)

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_FORMSPREE_ID: ${{ secrets.NEXT_PUBLIC_FORMSPREE_ID }}
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - id: deployment
        uses: actions/deploy-pages@v4
```

Añade `NEXT_PUBLIC_FORMSPREE_ID` como **Repository Secret** en **Settings → Secrets and variables → Actions**.

---

## Tests

21 tests unitarios que cubren los componentes principales:

```
src/test/
├── layout.test.tsx           # Navbar (logo, links) y Footer (copyright, redes sociales)
├── HeroSection.test.tsx      # Heading, badge, CTAs y stats
├── PillarsSection.test.tsx   # Título, 3 pilares, tags de tecnologías
├── ExperienceSection.test.tsx # 6 roles, badge "Activo", metadata de periodo
└── ContactSection.test.tsx   # Campos del formulario, envío exitoso, manejo de errores
```

---

## Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| Space | `#0b0f19` | Fondo principal |
| Navy | `#0d1224` | Navbar / superficies secundarias |
| Slate | `#111827` | Tarjetas y contenedores |
| Border | `#1e293b` | Bordes sutiles |
| Cyan | `#00f0ff` | Acento primario (neon glow) |
| Muted | `#94a3b8` | Texto secundario |

---

## Contacto

- **Email:** [henridanielpenadequero@gmail.com](mailto:henridanielpenadequero@gmail.com)
- **LinkedIn:** [linkedin.com/in/henri-pena](https://linkedin.com/in/henri-pena)
- **GitHub:** [github.com/henri-dpd](https://github.com/henri-dpd)
