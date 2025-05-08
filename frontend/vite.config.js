import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      "/api": {
        target: 'https://ecommerce-gpmk.onrender.com',     // define o prefixo para a chamada 
        changeOrigin: true,
        secure: false
      }
    }
  }
})


