import type { WeatherData } from '../types/weather'
import { WeatherAPI } from '../api/weather'
import { useAsincData } from './useAsincData'
import { useMemo } from 'react'

import { WeatherError } from '../errors/WeatherError'

export const useWeather = (cityName?: string) => {
	const api = useMemo(() => new WeatherAPI(), [])

	const fetcher = useMemo(() => {
		if (!cityName) return null
		return () => api.getCurrentWeather(cityName)
	}, [api, cityName])

	return useAsincData<WeatherData, WeatherError>(fetcher, WeatherError.CITY_NOT_FOUND)
}
