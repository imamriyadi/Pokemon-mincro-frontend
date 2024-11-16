import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import FederationPlugin from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    FederationPlugin({
      name: 'hostApp',
      remotes: {},
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false
  }
})