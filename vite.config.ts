import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "IMGbeautify App",
        description:
          "IMGbeautify is a tool to add beautiful gradient background to your images",
        short_name: "IMGbeautify App",
        start_url: "/",
        background_color: "transparent",
        icons: [
          {
            src: "/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/maskable_icon.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        display: "standalone",
      },
    }),
  ],
});
