import enCommon from './en/common.json'
import enErrors from './en/errors.json'
import enWeekDay from './en/week-day.json'

import ukCommon from './uk/common.json'
import ukErrors from './uk/errors.json'
import ukWeekDay from './uk/week-day.json'

import { enWeather, ukWeather } from './condition/condition'

export const namespaces = ['common', 'errors', 'weather']
export const defaultNS = 'common'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
	en: {
		common: enCommon,
		errors: enErrors,
		weather: enWeather,
		weekDay: enWeekDay,
	},
	uk: {
		common: ukCommon,
		errors: ukErrors,
		weather: ukWeather,
		weekDay: ukWeekDay,
	},
}
