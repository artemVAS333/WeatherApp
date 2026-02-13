import { useState, useEffect } from 'react'
import './App.css'

import { useTranslation } from 'react-i18next'

import Settings from '../components/Settings'

import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

import SearchCity from '../components/SearchCity'
import WeatherCard from '../components/WeatherCard'
import TodayHourly from '../components/TodayHourly'
import Forecast from '../components/Forecast'
import FavoriteList from '../components/FavoriteList'
import AddToFavoritesButton from '../components/AddToFavoritesButton'

import { useWeather } from '../hooks/useWeather'
import { useForecast } from '../hooks/useForecast'

import { WeatherAPI } from '../api/weather'

function App() {
	const { t } = useTranslation()

	const [city, setCity] = useState<string | null>(() => localStorage.getItem('city'))
	const [ready, setReady] = useState(false)

	useEffect(() => {
		const fetchCity = async () => {
			if (!city) {
				try {
					const api = new WeatherAPI()

					const data = await api.getIP()
					setCity(data.city || 'London')
				} catch (err) {
					console.warn('Failed to fetch city by IP, using default city', err)
					setCity('London')
				}
			}
			setReady(true)
		}

		fetchCity()
	}, [city])

	const { data: weatherData, loading, error } = useWeather(ready && city ? city : undefined)
	const { data: forecastData } = useForecast(ready && city ? city : undefined)

	useEffect(() => {
		if (weatherData) {
			localStorage.setItem('city', weatherData.location.name)
		}
	}, [weatherData])

	return (
		<>
			<Settings />
			{loading && <Loading text={`${t('loading')}...`} />}
			{error && <ErrorMessage message={error} />}
			<SearchCity onSearch={setCity} />
			<FavoriteList onSelect={setCity} />
			{!loading && weatherData && <WeatherCard weatherData={weatherData} />}
			{weatherData && <AddToFavoritesButton city={weatherData.location.name} />}
			{forecastData && <TodayHourly forecastData={forecastData} />}
			{forecastData && <Forecast forecastData={forecastData} />}
		</>
	)
}

export default App
