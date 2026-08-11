import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { sites } from "./build/sites-vite-plugin";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "http://localhost:5173").replace(/\/$/, "");

  return {
    base: "./",
    plugins: [
      react(),
      {
        name: "yingying-site-url",
        transformIndexHtml(html) {
          return html.replaceAll("__SITE_URL__", siteUrl);
        },
      },
      sites(),
    ],
  };
});
