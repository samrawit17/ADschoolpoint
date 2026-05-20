import path from "path"
import { createRequire } from "module"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const require = createRequire(import.meta.url)
const prerenderRoutes = [
  "/",
  "/about",
  "/services",
  "/services/application-development",
  "/services/website-development",
  "/services/security-solutions",
  "/services/ai-integration",
  "/services/digital-marketing",
  "/services/automation-cloud-devops",
  "/solutions",
  "/blog",
  "/blog/web-dev-roadmap-ethiopia-2026",
  "/blog/payment-gateways",
  "/blog/website-builders",
  "/blog/pwa-guide",
  "/blog/tilex-pharma-link",
  "/portfolio",
  "/announcements",
  "/contact",
  "/careers",
  "/book",
]

const shouldPrerender = process.env.ENABLE_PRERENDER === "true"

export default defineConfig({
  plugins: [
    react(),
    ...(shouldPrerender
      ? [
          (() => {
            const vitePrerender = require("vite-plugin-prerender")
            const Renderer = vitePrerender.PuppeteerRenderer

            return vitePrerender({
              staticDir: path.join(__dirname, "dist"),
              routes: prerenderRoutes,
              renderer: new Renderer({
                renderAfterTime: 1000,
              }),
            })
          })(),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
