import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'], // Removes old browser support
    }),
    viteCompression({ algorithm: 'brotliCompress' }) // Enables Brotli Compression
  ],
  build: {
    minify: 'esbuild', // Use esbuild for fast & efficient minification
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    sourcemap: false, // Removes source maps to reduce bundle size
    target: 'esnext', // Uses the latest JavaScript features
    cssCodeSplit: true, // Splits CSS for better performance
    chunkSizeWarningLimit: 500, // Avoid chunk size warnings
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Preload React for faster startup
    esbuildOptions: {
      treeShaking: true, // Enables tree shaking
      minify: true, // Further reduces JS size
    },
  },
  server: {
    hmr: true, // Hot Module Replacement for fast development
  },
});
