// Build: ./node_modules/.bin/vite build --config vite.config.mjs  → ../gf (served at /gf/, mounted by every iteration)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
const B = fileURLToPath(new URL('.', import.meta.url));
const SKILL = fileURLToPath(new URL('../../noon-app-skill/', import.meta.url));
export default defineConfig({
  root: B,
  base: '/gf/',
  plugins: [react()],
  resolve: { alias: { '@kit': SKILL + 'src', '@assets': SKILL + 'src/assets' }, dedupe: ['react', 'react-dom', 'motion'] },
  assetsInclude: ['**/*.lottie'],
  build: { outDir: B + '../gf', emptyOutDir: true, assetsInlineLimit: 0, sourcemap: false },
  server: { fs: { allow: [SKILL, B] } },
});
