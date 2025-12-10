import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'; // Import the tailwindcss plugin

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // Set the base path for GitHub Pages
  plugins: [react(), tailwindcss()], // Add the tailwindcss plugin here
})
