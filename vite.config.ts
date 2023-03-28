import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: true,
    lib: {
      entry: 'src/WindowPipe.ts',
      name: 'window-pipe',
      formats: ['cjs', 'umd']
    },
    commonjsOptions: {
      transformMixedEsModules: true
    },    
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },  
})
