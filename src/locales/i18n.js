import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from './vi.json'
import en from './en.json'

const resources = {
  en: { translation: en },
  vi: { translation: vi },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('portfolio_lang') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

// Persist language selection
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('portfolio_lang', lng)
})

export default i18n
