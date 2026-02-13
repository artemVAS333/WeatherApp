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

	const { data: forecastData, loading, error } = useForecast(ready && city ? city : undefined)

	if (loading) {
		return <Loading text={`${t('loading')}...`} />
	}

	return (
		<>
			<Settings />
			{error && <ErrorMessage message={error} />}
			<SearchCity onSearch={setCity} />
			<FavoriteList onSelect={setCity} />
			{forecastData && <WeatherCard weatherData={forecastData} />}
			{forecastData && <AddToFavoritesButton city={forecastData.location.name} />}
			{forecastData && <TodayHourly forecastData={forecastData} />}
			{forecastData && <Forecast forecastData={forecastData} />}
		</>
	)
}

export default App
