// Karma configuration for React + TS + Jasmine using esbuild
/** @type {import('karma').Config} */
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/**/*.test.ts?(x)', watched: false },
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
        '.svg': 'text',
        '.png': 'dataurl',
        '.jpg': 'dataurl',
      },
    },
    reporters: ['spec'],
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
    ],
    client: {
      jasmine: { random: false },
      clearContext: false,
    },
    mime: { 'text/x-typescript': ['ts', 'tsx'] },
  })
}
