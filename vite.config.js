import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontendmentor-nft-preview-card-component/",
  plugins: [react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src")
    }
  }
})
