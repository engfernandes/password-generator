export default defineNuxtConfig({
  devtools: { enabled: true },
  head: {
    title: "Password Generator - Securepass",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content: "This is a free tool to generate your passwords",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [
    "ant-design-vue/dist/antd.css",
    "@/node_modules/normalize.css/normalize.css",
  ],
  plugins: [{ src: "@/plugins/ant-design-vue.js", mode: "client" }],
  buildModules: [
    // ...
    "@nuxtjs/style-resources",
  ],
  styleResources: {
    less: ["@/assets/variables.less"],
  },
  build: {
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
