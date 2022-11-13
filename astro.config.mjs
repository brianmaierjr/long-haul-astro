import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://long-haul-astro.netlify.app",
    integrations: [sitemap()],
});
