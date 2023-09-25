import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: 'https://teaclient.net/docs/',
	base: '/docs/',
  integrations: [
    starlight({
      title: "TeaClient Documentations",
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
            { label: "Intro", link: "/getting-started/intro/" },
            {
              label: "Installation",
              link: "/getting-started/install/",
              badge: { text: "Experimental", variant: "caution" },
            },
          ],
        },
        {
          label: "API",
          items: [
            { label: "Intro", link: "/api/intro/" },
            { label: "Tea+", link: "/api/tea/", badge: "New" },
          ],
        },
      ],
    }),
  ],
});
