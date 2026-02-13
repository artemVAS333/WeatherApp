import { createContext, useContext } from 'react'

export type TemperatureUnit = 'C' | 'F'
export type TimeFormat = '12h' | '24h'
export type Language = 'en' | 'uk'

interface SettingsContextProps {
	temperatureUnit: TemperatureUnit
	changeTemperatureUnit: () => void
	timeFormat: TimeFormat
	changeTimeFormat: () => void
	language: Language
	changeLanguage: (language: Language) => void
}

export const SettingsContext = createContext<SettingsContextProps>({
	temperatureUnit: 'C',
	changeTemperatureUnit: () => {},
	timeFormat: '12h',
	changeTimeFormat: () => {},
	language: 'en',
	changeLanguage: () => {},
})

export const useSettingsContext = () => useContext(SettingsContext)
