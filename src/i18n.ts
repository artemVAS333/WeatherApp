import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { resources, namespaces, defaultNS } from './locales/translations'

const browserLanguage = navigator.language.slice(0, 2)
const savedLanguage = localStorage.getItem('language')
const language = savedLanguage || browserLanguage || 'en'

if (!savedLanguage) {
	localStorage.setItem('language', language)
}

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: language, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		ns: namespaces, // name spaces, more information here: https://www.i18next.com/overview/configuration-options#namespaces
		defaultNS: defaultNS,

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	})

export default i18n
