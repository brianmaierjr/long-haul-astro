![preview Long Haul](/preview.jpg)

# Long Haul Theme for Astro

Long Haul is a minimal, long form theme for Astro. I originally built this theme for Jekyll about 8 years ago(yikes). Somehow, that theme has almost 700 forks and almost 600 stars [on GitHub](https://github.com/brianmaierjr/long-haul) so I figured I'd bring it into the future with Astro 🚀.

[View Demo](https://long-haul-astro.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1f6f43d4-fbc7-4877-bf95-0f48a30bd04d/deploy-status)](https://app.netlify.com/sites/long-haul-astro/deploys)

## Features

-   ✅ Built with Astro, duh
-   ✅ Automatic [Sitemap](/sitemap-index.xml) with [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
-   ✅ A modern CSS reset
-   ✅ System Font Stack for Performance
-   ✅ Generated Robots.txt via [astro-robots-txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme)
-   ✅ [XML Feed](rss.xml) for RSS Readers
-   ✅ Featured Post Images
-   ✅ [Netlify Forms](https://docs.netlify.com/forms/setup/) Ready
-   ✅ Color Mode Toggle
-   ✅ Icons Provided by [Astro Icons](https://www.astroicon.dev/)
-   ✅ Fluid Type and Space Scale from [UTOPIA](https://utopia.fyi)
-   ✅ Compression via [Astro Compress](https://github.com/astro-community/astro-compress)
-   ✅ Skip To Main Content Link
-   ✅ Accessible Focus Styling
-   ✅ Accessible Mobile Menu
-   ✅ ⚡ Perfect Lighthouse Score

## Get Started

### Install Dependencies

```sh
npm install
```

### Modify Settings

The main settings can be found inside the `src/data/settings.ts` file. In this file you can edit the site title, description and url. You will also find the navigation menus for the header and footer here.

### Customize Theme

#### Change Primary Color

To change the green primary color you will need to open the `_config.scss` file and change the following variables:

```
--primary-color: #2d8653; // Used for links and buttons
--primary-color-shade: #21633e; // Used for the button hover
--link-hover: #246b43; // Anchor hover color(separate for light and dark theme)
```

#### Change Header Image

After adding your new image to the `public/images` folder, change the path of the **hero** in the `src/data/settings.ts` file to point to your new image.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/brianmaierjr/long-haul-astro)

Feel free to deploy and host your site on your favorite static hosting service such as Netlify, Firebase Hosting, Vercel, GitHub Pages, etc.

Astro has [an in-depth guide](https://docs.astro.build/en/guides/deploy/) on how to deploy an Astro project to each service.

## License

This is [MIT](LICENSE) with no added caveats, so feel free to use this Astro theme on your site without linking back to me or using a disclaimer.
