import { useState, useEffect } from 'react'

const API_KEY = '62e333b4e97948c48c3141029260602'
const BASE_URL = 'https://api.weatherapi.com/v1/current.json'

export const useWeather = (city: string) => {
	const [weatherData, setWeatherData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const fetchWeatherData = async (cityName: string) => {
		try {
			setError(null)
			setLoading(true)

			const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${cityName}`)
			const data = await response.json()
			if (data.error) {
				throw new Error(data.error.message)
			}
			setWeatherData(data)
			console.log(data)
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
