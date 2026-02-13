import type { ForecastWeaterData } from '../types/weather'
import { WeatherAPI } from '../api/weather'
import { useAsincData } from './useAsincData'
import { useMemo } from 'react'

import { WeatherError } from '../errors/WeatherError'

export const useForecast = (cityName?: string, days: number = 7) => {
	const api = useMemo(() => new WeatherAPI(), [])

	const fetcher = useMemo(() => {
		if (!cityName) return null
		return () => api.getForecastWeather(cityName, days)
	}, [api, cityName, days])

	return useAsincData<ForecastWeaterData, WeatherError>(fetcher, WeatherError.UNKNOWN_ERROR)
}
