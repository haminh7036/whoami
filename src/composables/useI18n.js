import { ref, computed } from 'vue'
import { translations } from '../i18n/translations.js'

const SUPPORTED_LOCALES = ['en']
const DEFAULT_LOCALE = 'en'

// Detect user locale from localStorage or browser
function getInitialLocale() {
  return DEFAULT_LOCALE
}

const currentLocale = ref(getInitialLocale())

export function useI18n() {
  const locale = computed({
    get: () => currentLocale.value,
    set: (val) => {
      if (SUPPORTED_LOCALES.includes(val)) {
        currentLocale.value = val
        localStorage.setItem('whoami_locale', val)
        document.documentElement.lang = val
      }
    }
  })

  const t = computed(() => translations[currentLocale.value] || translations.en)

  const localeNames = {
    en: { name: 'English', short: 'EN', flag: '🇬🇧' },
    vi: { name: 'Tiếng Việt', short: 'VI', flag: '🇻🇳' },
    zh: { name: '中文', short: 'ZH', flag: '🇨🇳' }
  }

  function setLocale(newLocale) {
    locale.value = newLocale
  }

  return {
    locale,
    t,
    supportedLocales: SUPPORTED_LOCALES,
    localeNames,
    setLocale
  }
}
