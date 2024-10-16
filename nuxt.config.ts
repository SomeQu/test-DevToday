// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_URL,
    },
  },
  components: [
    {
      path: "~/src/Components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/styles.scss"],
});
