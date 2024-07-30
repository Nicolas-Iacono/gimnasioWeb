import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': process.env.VITE_API_URL
    }
  },
  build: {
    outDir: 'dist', // Directorio de salida para la construcción
    rollupOptions: {
      input: 'index.html' // Asegúrate de que el archivo index.html esté en esta ubicación
    }
  }
});