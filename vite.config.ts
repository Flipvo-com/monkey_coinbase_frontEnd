import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    include: [
        "@tsparticles/vue3",
        "@tsparticles/slim"
    ], // Essayez d'ajouter cette ligne pour optimiser l'importation du module
  },
});
