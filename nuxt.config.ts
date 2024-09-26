// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

console.log('env', process.env)

export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-vuetify-starter/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module', '@nuxt/eslint'],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
      theme: {
        defaultTheme: 'dark',
      },
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    locales: ['en', 'pl', 'ua', 'de', 'ru'],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
  },
})
