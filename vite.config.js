import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: '0.0.0.0',
    port: 4321,
    allowedHosts: ['radit.is-a.dev', 'localhost', '127.0.0.1']
  },
  server: {
    host: '0.0.0.0',
    port: 4321,
    allowedHosts: ['radit.is-a.dev', 'localhost', '127.0.0.1'],
    hmr: {
      host: 'radit.is-a.dev'
    }
  }
})