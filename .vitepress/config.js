import { defineConfig } from "vitepress";
import { inject } from '@vercel/analytics';
 
inject(); // vercel-analytics

export default defineConfig({
  title: "Lenin AGC",
  description: "My portfolio/blog made with VitePress",
  appearance: "dark",
  head: [
    ["script", { src: "/_vercel/insights/script.js", defer: true }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog-index" },
    ],
    sidebar: [
      {
        text: "Posts",
        items: [
          {
            text: "Haciendo deploy del backend en heroku",
            link: "posts/haciendo-deploy-del-backend-en-heroku",
          },
          {
            text: "Instalar vscodium en manjaro lxqt",
            link: "posts/instalar-vscodium-en-manjaro-lxqt",
          },
          {
            text: "Instalar brave en arch",
            link: "posts/instalar-brave-en-arch",
          },
          {
            text: "Me quedo en arch",
            link: "posts/me-quedo-en-arch",
          },
          {
            text: "Instalar KDE-plasma en pureos",
            link: "posts/instalar-kde-plasma-en-pureos",
          },
          {
            text: "Virtual network default nat virt manager",
            link: "posts/virtual-network-default-nat-virt-manager",
          },
          {
            text: "Mi primera maquina virtual con virt manager",
            link: "posts/mi-primera-maquina-virtual-con-virt-manager",
          },
          {
            text: "Instalar virt-manager en opensuse tumbleweed",
            link: "posts/instalar-virt-manager-en-opensuse-tumbleweed",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/IGUNUBLUE" },
      { icon: "twitter", link: "https://twitter.com/lenin_agc" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/lenin-garizabalo/",
      },
    ],
    footer: {
      message:
        "Released under the <a href='https://github.com/vuejs/vitepress/blob/main/LICENSE'>MIT License</a>.",
      copyright:
        'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>. I have only made the necessary adjustments to adapt it to my preferences.',
    },
  },
});
