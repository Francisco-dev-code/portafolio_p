# Portafolio (React + TypeScript + Karma/Jasmine)

Este proyecto es un portafolio simple con cuatro secciones: Inicio, Sobre mí, Proyectos y Contacto. Está creado con React + TypeScript (Vite) y usa Karma + Jasmine para pruebas unitarias con esbuild.

## Requisitos
- Node.js 18+
- Google Chrome (para ejecutar Karma en modo headless)

## Scripts
- `npm run dev`: Levanta el servidor de desarrollo de Vite.
- `npm run build`: Compila el proyecto para producción en `dist/`.
- `npm run preview`: Sirve el build de producción localmente.
- `npm run test`: Ejecuta las pruebas unitarias en modo single-run (ChromeHeadless).
- `npm run test:watch`: Ejecuta las pruebas en modo watch.
- `npm run lint`: Corre ESLint sobre el proyecto.

## Estructura principal
- `src/components/` contiene `Home`, `About`, `Projects` y `Contact`.
- `karma.conf.cjs` configuración de Karma con Jasmine y esbuild.
- `tsconfig.app.json` con types para `jasmine` para reconocimiento de globals.

## Notas
- Las pruebas están hechas con Testing Library para verificación del renderizado e interacciones básicas.
- Para personalizar proyectos, edita `src/components/Projects.tsx`.

## Ejecutar
1. Instala dependencias: `npm install`.
2. Desarrollo: `npm run dev`.
3. Pruebas: `npm run test`.
