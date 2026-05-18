# Animaciones

Todas las animaciones están definidas en `src/app/globals.css`. No hay dependencias JS de animación (sin GSAP, Framer Motion, ni AOS).

## Tipos de Animación

**Animaciones persistentes (bucle infinito)**
Se reproducen siempre, independientemente del scroll. Se usan para elementos del hero que deben llamar la atención continuamente: el título (shimmer de gradiente), el badge (pulso de borde), el botón CTA (pulso de glow) y el widget terminal (flotación + glow).

**Animaciones de entrada por scroll (scroll-driven)**
Se reproducen una sola vez cuando el elemento entra en el viewport. Usan la API CSS nativa `animation-timeline: view()`. Están envueltas en `@supports (animation-timeline: view())` — en navegadores sin soporte el elemento aparece visible directamente, sin animación (progressive enhancement).

**Animación del acordeón**
`ExperienceSection` no usa keyframes. La transición de altura se logra con `grid-rows-[0fr]` → `grid-rows-[1fr]` en CSS. La razón: animar `height: auto` directamente no es posible en CSS, y medir `scrollHeight` con JS causa layout thrashing.

## Clases Disponibles

Las clases de animación están definidas como utilidades en `globals.css`. Ver el archivo para los valores exactos de duración y easing.

**Persistentes:** `animate-float`, `animate-glow-pulse`, `animate-shimmer`, `animate-border-glow`

**Scroll-driven:** `animate-on-scroll`, `animate-on-scroll-left`, `animate-on-scroll-right`, `animate-scale-in`

**Stagger (se aplica al contenedor, no al hijo):** `stagger-3` (3 hijos), `stagger-2` (2 hijos). Ajusta el `animation-range` de cada `:nth-child` para que los hijos entren con retraso escalonado.

## Cómo Añadir una Nueva Animación

1. Definir el `@keyframes` en `globals.css`
2. Crear la clase de utilidad en la sección correspondiente (persistente o dentro del bloque `@supports` si es scroll-driven)
3. Aplicar la clase al elemento en el componente
