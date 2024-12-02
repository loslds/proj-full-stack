import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Alias para simplificar os imports
    },
  },
  server: {
    port: 3000, // Porta padrão do Vite
    open: true, // Abre o navegador automaticamente
    proxy: {
      '/api': 'http://localhost:3001', // Proxy p/redirecionar requisições API para o backend
    },
  },
});




// https://vite.dev/config/
//export default defineConfig({
//  plugins: [react()],
//  server: {
//    proxy: {
//      '/api': 'http://localhost:3001',
//    },
//  },
//});