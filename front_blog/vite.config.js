import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@pages': path.resolve(__dirname, 'src/pages'),
      // eslint-disable-next-line no-undef
      '@common': path.resolve(__dirname, 'src/components/common'),
      // eslint-disable-next-line no-undef
      '@components': path.resolve(__dirname, 'src/components'),
      // eslint-disable-next-line no-undef
      '@ui': path.resolve(__dirname, 'src/components/common/ui_components'),
      // eslint-disable-next-line no-undef
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      // eslint-disable-next-line no-undef
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@api': path.resolve(__dirname, 'src/api'),
    }
  }
})
