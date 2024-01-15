import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "assets/*"],
      manifest: {
        name: "IMGbeautify App",
        description:
          "IMGbeautify is a tool to add beautiful gradient background to your images",
        short_name: "IMGbeautify App",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        display: "standalone",
      },
    }),
  ],
});
