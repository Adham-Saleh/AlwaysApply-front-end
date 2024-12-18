// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@element-plus/nuxt",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              // scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              // scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
  elementPlus: {
    /** Options */
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || "https://adhamsaleh.pythonanywhere.com/",
    },
  },
  app: {
    head: {
      htmlAttrs: {
        dir: "ltr",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          integrity:
            "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: ["~/assets/global.css", "bootstrap-icons/font/bootstrap-icons.css"],
});
