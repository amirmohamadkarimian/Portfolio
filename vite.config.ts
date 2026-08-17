import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor libraries
          'vendor': ['react', 'react-dom'],
          // Below-the-fold components
          'sections': [
            './src/components/Blog.tsx',
            './src/components/Contact.tsx',
            './src/components/Experience.tsx',
            './src/components/Skills.tsx',
          ],
        },
      },
    },
    // Inline small assets
    assetsInlineLimit: 4096,
  },
});
