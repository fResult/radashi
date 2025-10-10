import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

// const resolve = (specifier: string) =>
// new URL(import.meta.resolve(specifier)).pathname

export default defineConfig(env => ({
  test: {
    globals: true,
    include: ['tests/**/*.test.ts'],
    benchmark: {
      include: ['benchmarks/**/*.bench.ts'],
    },
    coverage: {
      thresholds: { 100: true },
      include: ['src/**'],
      exclude: ['src/*.ts'],
    },
    setupFiles: [resolve(__dirname, 'benchmarks/globals.ts')],
    // setupFiles: env.mode === 'benchmark' ? ['benchmarks/globals.ts'] : [],
    typecheck: {
      include: ['tests/**/*.test-d.ts'],
      enabled: true,
      tsconfig: 'tests/tsconfig.json',
    },
  },
  resolve: {
    alias: {
      radashi: resolve('./src/mod.js'),
    },
  },
}))
