import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // Enable JSX in .js files
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
      // Disable TypeScript checking during build
      tsconfigRaw: {
        compilerOptions: {
          skipLibCheck: true,
          skipDefaultLibCheck: true,
          noEmit: true,
          noImplicitAny: false,
          strictNullChecks: false,
          noUnusedLocals: false,
          noUnusedParameters: false,
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '~base': resolve(__dirname, 'src', 'components', 'base'),
      '~common': resolve(__dirname, 'src', 'components', 'common'),
      '~loaders': resolve(__dirname, 'src', 'router', 'loaders'),
    },
  },
  build: {
    emptyOutDir: true,
    // Disable TypeScript checking during build
    typescript: {
      noEmit: true,
      ignoreBuildErrors: true,
    },
  },
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
  server: {
    port: 3000,
  },
})
