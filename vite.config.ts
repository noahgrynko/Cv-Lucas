import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Relative base so the build works from any GitHub Pages repo path
// (username.github.io/<repo-name>/) without extra configuration.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
