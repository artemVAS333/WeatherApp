import enCommon from './en/common.json'
import enErrors from './en/errors.json'
import enWeekDay from './en/week-day.json'

import ukCommon from './uk/common.json'
import ukErrors from './uk/errors.json'
import ukWeekDay from './uk/week-day.json'

export const namespaces = ['common', 'errors', 'weather', 'weekDay']
export const defaultNS = 'common'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
	en: {
		common: enCommon,
		errors: enErrors,
		weekDay: enWeekDay,
	},
	uk: {
		common: ukCommon,
		errors: ukErrors,
		weekDay: ukWeekDay,
	},
}
