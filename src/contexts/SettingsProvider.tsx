import { useCallback, useMemo, useState } from 'react'
import { SettingsContext } from './SettingsContext'
import { useTranslation } from 'react-i18next'

import type { TemperatureUnit, TimeFormat, Language } from './SettingsContext'

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
	const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('F')

	const changeTemperatureUnit = useCallback(() => {
		setTemperatureUnit((prev) => (prev === 'F' ? 'C' : 'F'))
	}, [])
	const [timeFormat, setTimeFormat] = useState<TimeFormat>('12h')

	const changeTimeFormat = useCallback(() => {
		setTimeFormat((prev) => (prev === '12h' ? '24h' : '12h'))
	}, [])

	const { i18n } = useTranslation()
	const [language, setLanguage] = useState<Language>(() => {
		const storedLanguage = localStorage.getItem('language') as Language
		const browserLanguage = navigator.language.slice(0, 2) as Language

		const lang: Language = storedLanguage || browserLanguage || 'en'
		i18n.changeLanguage(lang)
		localStorage.setItem('language', lang)

		return lang
	})

	const changeLanguage = useCallback(
		(lang: Language) => {
			setLanguage(lang)
			i18n.changeLanguage(lang)
			localStorage.setItem('language', lang)
		},
		[i18n],
	)

	const value = useMemo(
		() => ({ temperatureUnit, changeTemperatureUnit, timeFormat, changeTimeFormat, language, changeLanguage }),
		[temperatureUnit, changeTemperatureUnit, timeFormat, changeTimeFormat, language, changeLanguage],
	)

	return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}
