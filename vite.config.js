import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match the GitHub repo name for GitHub Pages project sites
export default defineConfig({
  base: '/portfolio-Website2/',
  plugins: [react(), tailwindcss()],
})
