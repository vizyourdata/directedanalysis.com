import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Built output ships to /new/ on directedanalysis.com (GitHub Pages,
// served straight from the repo root) so it lives beside the current
// live site for side-by-side comparison.
export default defineConfig({
  base: '/new/',
  plugins: [react()],
  build: {
    outDir: '../new',
    emptyOutDir: true,
  },
})
