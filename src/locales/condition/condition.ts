import WeatherCondition from './conditions.json'

interface WeatherConditionItem {
	code: number
	day: string
	night: string
	icon: number
	languages: {
		lang_name: string
		lang_iso: string
		day_text: string
		night_text: string
	}[]
}

const weatherConditions: WeatherConditionItem[] = WeatherCondition

export const enWeather = weatherConditions.reduce((acc: Record<string, string>, item) => {
	acc[item.code] = item.day
	return acc
}, {})

export const ukWeather = weatherConditions.reduce((acc: Record<string, string>, item) => {
	const ukLang = item.languages.find((l) => l.lang_iso === 'uk')
	acc[item.code] = ukLang ? ukLang.day_text : item.day
	return acc
}, {})
