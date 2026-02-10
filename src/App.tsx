import { useState, useEffect } from 'react'
import './App.css'

import SearchCity from './components/SearchCity'
import WeatherCard from './components/WeatherCard'
import FavoriteList from './components/FavoriteList'
import AddToFavoritesButton from './components/AddToFavoritesButton'

import { useWeather } from './hooks/useWeather'

function App() {
	const [city, setCity] = useState(() => {
		return localStorage.getItem('city') || 'Chernivtsi'
	})

	const { weatherData, loading, error } = useWeather(city)

	useEffect(() => {
		localStorage.setItem('city', city)
	}, [city])

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<SearchCity onSearch={setCity} />
			<FavoriteList onSelect={setCity} />
			{weatherData && !loading && <WeatherCard city={weatherData.location.name} temperature={Math.round(weatherData.current.temp_c)} weather={weatherData.current.condition.text} />}
			<AddToFavoritesButton city={weatherData?.location.name} />
		</>
	)
}

export default App
