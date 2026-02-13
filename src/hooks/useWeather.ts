import type { WeatherData } from '../types/weather'
import { WeatherAPI } from '../api/weather'
import { useAsincData } from './useAsincData'
import { useMemo } from 'react'

export const useWeather = (cityName?: string) => {
	const api = useMemo(() => new WeatherAPI(), [])

	const fetcher = useMemo(() => {
		if (!cityName) return null
		return () => api.getCurrentWeather(cityName)
	}, [api, cityName])

	return useAsincData<WeatherData>(fetcher)
}
