import { useState, useEffect } from 'react'
import './App.css'

import WeatherCard from './components/WeatherCard'

const API_KEY = '62e333b4e97948c48c3141029260602'
const BASE_URL = 'https://api.weatherapi.com/v1/current.json'

function App() {
	const [weatherData, setWeatherData] = useState(null)

	const fetchWeatherData = async () => {
		try {
			const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=Chernivtsi`)
			const data = await response.json()
			setWeatherData(data)
			console.log(data)
		} catch (error) {
			console.error('Error fetching weather data:', error)
		}
	}

	useEffect(() => {
		fetchWeatherData()
	}, [])

	return (
		<>
			<div>
				{weatherData ?
					<WeatherCard city={weatherData.location.name} temperature={Math.round(weatherData.current.temp_c)} weather={weatherData.current.condition.text} />
				:	<p>Loading weather data...</p>}
			</div>
		</>
	)
}

export default App
