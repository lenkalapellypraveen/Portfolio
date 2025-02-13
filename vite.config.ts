import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Remove 'react-vertical-timeline-component' from the external array so it gets bundled
      external: [],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Example: Automatically import a global SCSS file in every component
        additionalData: `@import "@/styles/global.scss";`, // You can change the path accordingly
      },
      // If you're using plain CSS or any other preprocessor, you can add options here.
    },
  },
})
