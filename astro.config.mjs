import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.teaclient.net",
  output: 'static',
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
    editLink: {
      baseUrl: "https://github.com/TeaClientMC/Docs/edit/starlight/"
    },
    social: {
      github: "https://github.com/TeaClientMC/",
      discord: "https://discord.gg/aKXRP4WC7P"
    },
    sidebar: [{
      label: "Guides",
      items: [{
        label: "Intro",
        link: "/guides/intro/"
      }, {
        label: "Installation",
        link: "/guides/install/",
        badge: {
          text: "Comming Soon!",
          variant: "caution"
        }
      }, {
        label: "API Errors",
        link: "/guides/apierrors",
        badge: {
          text: "New",
          variant: "tip"
        }
      }]
    }, {
      label: "API Endpoints",
      autogenerate: {
        directory: 'api'
      }
    }, {
      label: "Notices",
      autogenerate: {
        directory: "notices"
      }
    }, {
      label: "Resources",
      items: [{
        label: "API URL",
        link: "https://api.teaclient.net"
      }, {
        label: "Roadmap",
        link: "https://teaclient.net/roadmap"
      }, {
        label: "GitHub",
        link: "https://teaclient.net/github"
      }, {
        label: "Discord",
        link: "https://teaclient.net/discord"
      }]
    }]
  }), tailwind()]
});