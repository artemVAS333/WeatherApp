import { useState, useEffect } from 'react'

import type { WeatherData } from '../types/weather'
import { WeatherError } from '../errors/WeatherError'

import { WeatherAPI } from '../api/weather'

export const useWeather = (city: string | null) => {
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	const fetchWeatherData = async (cityName?: string) => {
		if (!cityName) return
		try {
			const api = new WeatherAPI()

			setError(null)
			setLoading(true)

			const data = await api.getCurrentWeather(cityName)
			setWeatherData(data)
		} catch (err) {
			setError(WeatherError.CITY_NOT_FOUND)
			setWeatherData(null)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (!city) return
		fetchWeatherData(city)
	}, [city])

	return { weatherData, error, loading }
}
