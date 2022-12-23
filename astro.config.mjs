import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    site: "https://long-haul-astro.netlify.app",
    integrations: [sitemap(), compress(), robotsTxt(), alpinejs()],
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
