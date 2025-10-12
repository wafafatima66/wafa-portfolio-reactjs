import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Vercel expects `dist`; explicitly set and relax chunk warning
    outDir: 'dist',
    chunkSizeWarningLimit: 1200
  }
})
