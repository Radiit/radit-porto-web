import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://radit.is-a.dev",

  server: {
    host: '0.0.0.0',
    port: 4321,
    allowedHosts: /.*/,
  },
  preview: {
    host: '0.0.0.0',
    port: 4321,
    allowedHosts: /.*/
  },

  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
      allowedHosts: /.*/,
      hmr: {
        host: 'localhost'
      }
    },
    preview: {
      host: '0.0.0.0',
      port: 4321,
      allowedHosts: /.*/
    }
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.endsWith('/monitor-server/') &&
        !page.endsWith('/penyimpanan-keluarga-imam/')
    }),
    solidJs(),
    tailwind({ applyBaseStyles: false })
  ]
})