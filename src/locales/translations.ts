import enCommon from './en/common.json'
import ukCommon from './uk/common.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
	en: {
		common: enCommon,
	},
	uk: {
		common: ukCommon,
	},
}
