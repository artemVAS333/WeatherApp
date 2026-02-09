import { useState, useEffect } from 'react'
import './App.css'

import SearchCity from './components/SearchCity'
import WeatherCard from './components/WeatherCard'

const API_KEY = '62e333b4e97948c48c3141029260602'
const BASE_URL = 'https://api.weatherapi.com/v1/current.json'

function App() {
	const [weatherData, setWeatherData] = useState(null)
	const [city, setCity] = useState('Chernivtsi')
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

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}

			<SearchCity onSearch={setCity} />

			{weatherData && !loading && <WeatherCard city={weatherData.location.name} temperature={Math.round(weatherData.current.temp_c)} weather={weatherData.current.condition.text} />}
		</div>
	)
}

export default App
