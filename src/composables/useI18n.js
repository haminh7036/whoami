import { computed } from 'vue'
import { translations } from '../i18n/translations.js'

// ponytail: Locked to English for now. Re-add locale switching logic when multi-language is re-enabled.
export function useI18n() {
  const t = computed(() => translations.en)
  const locale = computed(() => 'en')

  return { t, locale }
}
