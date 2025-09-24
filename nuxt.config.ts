import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
    baseURL: 'wish-weaver',
    buildAssetsDir: 'assets/',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      extensions: ['vue'],
      pathPrefix: false,
    },
    {
      path: '~/components/ui',
      extensions: ['vue'],
      pathPrefix: false,
      prefix: 'Ui',
    },
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    'reka-ui/nuxt',
  ],

  vite: {
    plugins: [tailwindcss()],
    css: {
      // Disable CSS sourcemaps to avoid Tailwind v4 vite plugin warnings
      devSourcemap: false,
    },
    build: {
      // Ensure no JS/CSS sourcemaps are generated in dev to keep console clean
      sourcemap: false,
    },
  },
  nitro: {
    prerender: {
      routes: ['/'],
      ignore: ['200.html', '404.html'],
    },
  },
})
