import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"; // Add this line

export default defineConfig({
  darkMode: 'class',
  plugins: [react(), tailwindcss()], // Add tailwindcss() here
  theme: {
    extend: {},
  },
  plugins: [],
});
