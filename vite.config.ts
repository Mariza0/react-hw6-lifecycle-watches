import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@types/uuid']
    }
  },
  base: "react-hw6-lifecycle-watches",
  assetsInclude: ['src/img'],
  plugins: [react()],
})
