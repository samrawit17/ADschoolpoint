import path from "path"
import { createRequire } from "module"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const require = createRequire(import.meta.url)
const prerenderRoutes = [
  "/",
  "/about",
  "/blog",
  "/portfolio",
  "/contact",
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
