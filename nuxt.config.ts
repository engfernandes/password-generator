// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "ant-design-vue/dist/antd.css",
    "@/node_modules/normalize.css/normalize.css",
  ],
  plugins: [
    { src: "@/plugins/ant-design-vue.js", mode: "client" },
    { src: "@/plugins/style-resources.js", mode: "client" },
  ],
  build: {
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
