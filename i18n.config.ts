export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root', // recommended
    alwaysRedirect: true,
  },
  messages: {
    en: {
      Welcome: 'Welcome',
    },
    pl: {
      Welcome: 'Witaj',
    },
    ua: {},
    de: {},
    ru: {},
  },
}))
