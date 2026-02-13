import { useState, useEffect } from 'react'

import type { ForecastWeaterData } from '../types/weather'
import { WeatherError } from '../errors/WeatherError'

import { fetchForecastWeather } from '../api/weather'

export const useForecast = (city: string | null) => {
	const [forecastData, setForecastData] = useState<ForecastWeaterData | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	const fetchWeatherData = async (cityName?: string, days: number = 7) => {
		if (!cityName) return
		try {
			setError(null)
			setLoading(true)

			const data = await fetchForecastWeather(cityName, days)
			console.log(data)
			setForecastData(data)
		} catch (err) {
			setError(WeatherError.CITY_NOT_FOUND)
			setForecastData(null)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (!city) return
		fetchWeatherData(city)
	}, [city])

	return { forecastData, error, loading }
}
