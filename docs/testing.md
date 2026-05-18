# Testing

## Estado Actual

27 tests unitarios en 6 archivos bajo `src/test/`. Stack: Vitest 4.1.6 + Testing Library + jsdom.

| Archivo | Tests | Qué cubre |
|---|---|---|
| `layout.test.tsx` | 4 | Logo de marca, nav links, copyright, social links |
| `HeroSection.test.tsx` | 5 | Heading, badge, CTAs (texto + href), stats labels |
| `PillarsSection.test.tsx` | 3 | Section heading, títulos de pilares, technology tags |
| `BlogSection.test.tsx` | 3 | Section heading, títulos de cards, links "Ver en GitHub" con href |
| `ExperienceSection.test.tsx` | 7 | Section heading, 6 empresas, badge "Activo", acordeón por defecto, toggle abrir, toggle cerrar |
| `ContactSection.test.tsx` | 5 | Section heading, campos de formulario, links directos, success mock, error mock |

Configuración en `vitest.config.ts`. Setup global (jest-dom matchers) en `src/test/setup.ts`.

## Comandos

```bash
npm test             # Una sola ejecución (modo CI)
npm run test:watch   # Modo watch interactivo
```

## Decisiones de Testing

**`"use client"` no afecta a los tests**
La directiva es solo para el bundler de Next.js. Testing Library renderiza los componentes directamente en jsdom sin pasar por el bundler.

**`fetch` se mockea en ContactSection**
Los tests de ese componente mockan `global.fetch` para simular respuestas de Formspree. Ver el archivo de test para el patrón exacto.

**El acordeón se testea via `aria-expanded`**
`ExperienceSection.test.tsx` verifica el atributo `aria-expanded` antes y después de `fireEvent.click`. No se testean estilos CSS.

**`next/image` funciona en jsdom sin configuración adicional**
Se renderiza como `<img>` estándar. `getByAltText` funciona directamente.

## Qué No se Testea Aquí

- **Estilos / animaciones**: los tests son de comportamiento y contenido, no de CSS.
- **Build de Next.js**: `npm run build` actúa como test de integración de TypeScript + Next.js.
- **Endpoint real de Formspree**: solo se testea el flujo de UI con mocks.
- **Routing**: no hay routing dinámico en el proyecto — solo anclas `#`.

## Cómo Añadir Tests para un Nuevo Componente

Crear `src/test/NombreComponente.test.tsx`. El alias `@` apunta a `./src`. Cubrir como mínimo: que el heading de la sección se renderiza y que los datos de `portfolio.ts` aparecen correctamente. Si el componente es `"use client"`, añadir tests de interactividad.
