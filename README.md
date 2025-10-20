# Portafolio (React + TypeScript + Karma/Jasmine)

Este proyecto es un portafolio simple con cuatro secciones: Inicio, Sobre mí, Proyectos y Contacto. Está creado con React + TypeScript (Vite) y usa Karma + Jasmine para pruebas unitarias con esbuild.

## Requisitos
- Node.js 18+
- Google Chrome (para ejecutar Karma en modo headless)

## Scripts
- `npm run dev`: Levanta el servidor de desarrollo de Vite.
- `npm run build`: Compila el proyecto para producción en `dist/`.
- `npm run preview`: Sirve el build de producción localmente.
- `npm run test`: Ejecuta las pruebas unitarias en modo single-run (ChromeHeadless) con reporte de cobertura.
- `npm run test:watch`: Ejecuta las pruebas en modo watch.
- `npm run lint`: Corre ESLint sobre el proyecto.

## Estructura principal
- `src/components/` contiene `Home`, `About`, `Projects` y `Contact`.
- `src/hooks/` contiene hooks personalizados como `useDarkMode` y `useScrollReveal`.
- `karma.conf.cjs` configuración de Karma con Jasmine, esbuild y coverage.
- `tsconfig.app.json` con types para `jasmine` para reconocimiento de globals.

## Testing y Cobertura de Código

### Entorno de Pruebas
El proyecto utiliza **Karma + Jasmine + esbuild** para ejecutar pruebas unitarias en un navegador real (ChromeHeadless).

#### Configuración del Entorno
- **Karma**: Test runner que ejecuta las pruebas en navegadores reales
- **Jasmine**: Framework de testing con sintaxis BDD
- **karma-coverage**: Plugin para generar reportes de cobertura de código
- **@testing-library/react**: Utilidades para testear componentes React
- **@testing-library/user-event**: Simulación de interacciones del usuario

### Escritura de Pruebas Unitarias

#### Componentes Testeados
1. **Home.test.tsx** - Pruebas del componente de inicio
   - Renderizado de elementos
   - Navegación programática con mocks de `useNavigate`
   - Interacciones con modales
   - Manejo de eventos del teclado

2. **About.test.tsx** - Pruebas de la sección "Sobre mí"
   - Renderizado de información personal
   - Visualización de certificaciones

3. **Projects.test.tsx** - Pruebas de proyectos
   - Lista de proyectos
   - Tecnologías utilizadas

4. **Contact.test.tsx** - Pruebas del formulario de contacto
   - Validación de campos
   - Envío de formulario
   - Manejo de errores
   - Estados del formulario

5. **useDarkMode.test.tsx** - Pruebas del hook de tema oscuro
   - Mock de `localStorage`
   - Mock de `document.documentElement`
   - Toggle de tema
   - Persistencia de preferencias

6. **useScrollReveal.test.tsx** - Pruebas del hook de animaciones scroll
   - Mock de `IntersectionObserver`
   - Detección de visibilidad
   - Cleanup de observers

### Uso de Mocks

#### 1. Mock de localStorage
```typescript
const getItemSpy = jasmine.createSpy('getItem').and.returnValue('true')
const setItemSpy = jasmine.createSpy('setItem')

spyOnProperty(window, 'localStorage', 'get').and.returnValue({
  getItem: getItemSpy,
  setItem: setItemSpy,
  // ...
})
```

#### 2. Mock de IntersectionObserver
```typescript
const observeMock = jasmine.createSpy('observe')
const mockIntersectionObserver = jasmine.createSpy('IntersectionObserver')
  .and.callFake((callback) => ({
    observe: observeMock,
    unobserve: jasmine.createSpy('unobserve'),
    // ...
  }))

window.IntersectionObserver = mockIntersectionObserver
```

#### 3. Mock de useNavigate (React Router)
```typescript
const mockNavigate = jasmine.createSpy('navigate')
spyOn(ReactRouterDom, 'useNavigate').and.returnValue(mockNavigate)

// En el test:
expect(mockNavigate).toHaveBeenCalledWith('/proyectos')
```

#### 4. Mock de window.addEventListener
```typescript
const addEventListenerSpy = jasmine.createSpy('addEventListener')
window.addEventListener = addEventListenerSpy

// Verificar:
expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', jasmine.any(Function))
```

### Análisis de Resultados

#### Reportes Generados
El sistema genera tres tipos de reportes de cobertura:

1. **Reporte HTML** (`coverage/html/index.html`)
   - Visualización completa de la cobertura
   - Archivos con código resaltado mostrando líneas cubiertas/no cubiertas
   - Navegación por directorios

2. **Reporte de Texto** (consola)
   - Resumen rápido de porcentajes de cobertura
   - Muestra: statements, branches, functions, lines

3. **LCOV** (`coverage/lcov.info`)
   - Formato estándar para integración con CI/CD
   - Compatible con servicios como Codecov, Coveralls

#### Umbrales de Cobertura
El proyecto está configurado con los siguientes umbrales mínimos:
- **Statements**: 70%
- **Branches**: 60%
- **Functions**: 70%
- **Lines**: 70%

Si la cobertura cae por debajo de estos valores, Karma reportará un error.

### Ejecutar las Pruebas

```bash
# Ejecutar todas las pruebas una vez
npm run test

# Ejecutar en modo watch (desarrollo)
npm run test:watch

# Ver el reporte de cobertura
# Abrir coverage/html/index.html en el navegador después de ejecutar los tests
```

### Mejores Prácticas

1. **Cada componente debe tener su archivo de test** con el sufijo `.test.tsx`
2. **Usar describe() para agrupar** tests relacionados
3. **Usar beforeEach()** para configurar mocks y estado inicial
4. **Limpiar mocks después de cada test** con `afterEach()`
5. **Testear comportamiento, no implementación**
6. **Usar mocks para dependencias externas** (APIs, localStorage, observers)
7. **Verificar casos límite y errores**, no solo el camino feliz
8. **Mantener tests independientes** - cada test debe poder ejecutarse solo

## Notas
- Las pruebas están hechas con Testing Library para verificación del renderizado e interacciones básicas.
- Para personalizar proyectos, edita `src/components/Projects.tsx`.
- Los reportes de cobertura se regeneran en cada ejecución de tests.

## Ejecutar
1. Instala dependencias: `npm install`.
2. Desarrollo: `npm run dev`.
3. Pruebas: `npm run test`.
4. Ver cobertura: Abre `coverage/html/index.html` en el navegador.
