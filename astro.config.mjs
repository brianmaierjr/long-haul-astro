import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    site: "https://long-haul-astro.netlify.app",
    integrations: [sitemap(), compress()],
    markdown: {
        shikiConfig: {
            // Choose from Shiki's built-in themes (or add your own)
            // https://github.com/shikijs/shiki/blob/main/docs/themes.md
            theme: "nord",
            // Enable word wrap to prevent horizontal scrolling
            wrap: true,
        },
    },
});
