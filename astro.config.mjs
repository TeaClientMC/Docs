import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.teaclient.net",
  output: 'static',
  redirects: {
    '/': {
      status: 301,
      destination: 'https://teaclient.net/wiki',
    },
  },
  integrations: [starlight({
    title: "TeaClient Docs",
    components: {
      SocialIcons: "./src/components/social.astro"
    },
    favicon: "/favicon.png",
    logo: {
      src: "./src/assets/Tea_client.webp"
    },
    lastUpdated: true,
    customCss: ["./src/styles/style.css"],
    social: {
      github: "https://github.com/TeaClientMC/",
      discord: "https://discord.gg/aKXRP4WC7P"
    },
  }), tailwind()]
});
