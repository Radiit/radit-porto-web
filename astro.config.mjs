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
    allowedHosts: ["radit.is-a.dev", "localhost", "127.0.0.1"],
  },
  preview: {
    host: '0.0.0.0',
    port: 4321,
    allowedHosts: ["radit.is-a.dev", "localhost", "127.0.0.1", "43.134.87.90"],
  },
  vite: {
    preview: {
      host: '0.0.0.0',
      port: 4321,
      allowedHosts: ["radit.is-a.dev", "localhost", "127.0.0.1", "43.134.87.90"],
    },
    server: {
      host: '0.0.0.0',
      allowedHosts: ["radit.is-a.dev", "localhost", "127.0.0.1", "43.134.87.90"],
    }
  },
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})