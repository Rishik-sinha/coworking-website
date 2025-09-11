import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Add this base property
  base: 'coworking-website', 
  plugins: [react()],
})