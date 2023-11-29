import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/RireyesDev24/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: () => 'never',
      }
    }
  }
  
})
