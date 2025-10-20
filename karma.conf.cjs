// Karma configuration for React + TS + Jasmine using esbuild
/** @type {import('karma').Config} */
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/**/*.test.ts?(x)', watched: false },
      // Sirve imágenes estáticas para que rutas absolutas (/assets/...) funcionen en tests
      { pattern: 'public/assets/img/**/*', watched: false, included: false, served: true, nocache: false },
      { pattern: 'assets/img/**/*', watched: false, included: false, served: true, nocache: false },
    ],
    preprocessors: {
      'src/**/*.test.ts': ['esbuild'],
      'src/**/*.test.tsx': ['esbuild'],
    },
    esbuild: {
      target: 'es2022',
      format: 'esm',
      jsx: 'automatic',
      jsxDev: true,
      sourcemap: 'inline',
      tsconfig: 'tsconfig.app.json',
      define: {
        'process.env.NODE_ENV': '"test"',
      },
      loader: {
        // Import SVGs as data URLs so <img src={icon.svg}> works in tests without 404s
        '.svg': 'dataurl',
        '.png': 'dataurl',
        '.jpg': 'dataurl',
      },
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' },
        { type: 'lcovonly', subdir: '.' },
      ],
      instrumenterOptions: {
        istanbul: { noCompact: true }
      },
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-esbuild',
      'karma-coverage',
    ],
    // Mapea rutas absolutas usadas por la app a los archivos servidos por Karma
    proxies: {
      '/assets/': '/base/public/assets/',
    },
    client: {
      jasmine: { random: false },
      clearContext: false,
    },
    mime: { 'text/x-typescript': ['ts', 'tsx'] },
  })
}
