import { useState, useEffect } from 'react'

import type { WeatherData } from '../types/weather'

import { fetchCurrentWeather } from '../api/weather'

export const useWeather = (city: string) => {
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	const fetchWeatherData = async (cityName: string) => {
		try {
			setError(null)
			setLoading(true)

			const data = await fetchCurrentWeather(cityName)
			setWeatherData(data)
		} catch (err) {
			setError('Failed to fetch weather data')
			setWeatherData(null)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchWeatherData(city)
	}, [city])

	return { weatherData, error, loading }
}
