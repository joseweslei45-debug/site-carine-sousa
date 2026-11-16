import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// No GitHub Pages o site fica em /site-carine-sousa/.
// Se usar um domínio próprio, troque `base` para '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/site-carine-sousa/' : '/',
  plugins: [react(), tailwindcss()],
}))
