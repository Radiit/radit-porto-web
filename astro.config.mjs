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
    allowedHosts: ["radit.is-a.dev"],
  },
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})