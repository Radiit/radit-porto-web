import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://radit.is-a.dev",
  // base: "/porto/",

  server: {
    host: true,
    allowedHosts: "all",
  },
  preview: {
    host: '0.0.0.0',
    port: 4321,
    allowedHosts: "all",
  },
  vite: {
    preview: {
      host: '0.0.0.0',
      port: 4321,
      allowedHosts: "all",
    },
    server: {
      host: '0.0.0.0',
      allowedHosts: "all",
      hmr: {
        host: 'radit.is-a.dev'
      },
    },
    define: {
      __VUE_PROD_DEVTOOLS__: false,
    },
  },
  integrations: [
    mdx(), 
    sitemap({
      filter: (page) => 
        !page.includes('/monitor-server') && 
        !page.includes('/penyimpanan-keluarga-imam')
    }), 
    solidJs(), 
    tailwind({ applyBaseStyles: false })
  ],
})