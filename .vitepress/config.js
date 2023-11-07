import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Lenin AGC",
  description: "My portfolio/blog made with VitePress",
  appearance: "dark",
  head: [
    ["script", { src: "/_vercel/insights/script.js", defer: true }],
    [
      "script",
      {},
      `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('phc_Vv87S7OnQeLMNBjqTx3bg7a36JzYKQ9BV3ZYfRrqtSV',{api_host:'https://app.posthog.com'})`,
    ],
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
            text: "How to Add Vercel/Analytics to Vitepress Projects",
            link: "posts/how-to-add-vercel-analytics-to-vitepress-projects.md",
          },
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
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/3s2nd3ydj7/",
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
