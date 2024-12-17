import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ensures paths work correctly
  build: {
    outDir: 'dist', // Default output folder for Vite
  },
});