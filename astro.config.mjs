import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://teaclient.net/docs/",
  base: "/docs/",
  output: 'static',
  integrations: [
    starlight({
      title: "TeaClient Documentations",
      components: {
        SocialIcons: "./src/content/components/social.astro",
      },
      favicon: "/favicon.png",
      logo: {
        src: "./src/assets/Tea_client.webp",
      },
      lastUpdated: true,
      customCss: ["./src/styles/style.css"],
      editLink: {
        baseUrl: "https://github.com/TeaClientMC/Docs/edit/starlight/",
      },
      social: {
        github: "https://github.com/TeaClientMC/",
        discord: "https://discord.gg/aKXRP4WC7P",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            { label: "Intro", link: "/guides/intro/" },
            {
              label: "Installation",
              link: "/guides/install/",
              badge: { text: "Experimental", variant: "caution" },
            },
            { label: "Contributing", link: "/contribute/", badge: "New" },
          ],
        },
        {
          label: "API",
          items: [
            { label: "Intro", link: "/api/intro/" },
            { label: "Tea+", link: "/api/tea/", badge: { text: "Experimental", variant: "caution" } },
          ],
        },
        {
          label: "Website",
          items: [
            { label: "🤖 Robots.txt", link: "/website/robots" },
            { label: "🗺️ Sitemap", link: "/website/sitemap" },
          ],
        },
      ],
    }),
  ],
});
