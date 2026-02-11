import { useState, useEffect } from 'react'
import './App.css'

import { useTranslation } from 'react-i18next'

import LanguageSwitcher from './components/LanguageSwitcher'

import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'

import SearchCity from './components/SearchCity'
import WeatherCard from './components/WeatherCard'
import FavoriteList from './components/FavoriteList'
import AddToFavoritesButton from './components/AddToFavoritesButton'

import { useWeather } from './hooks/useWeather'

import { fetchCityByIP } from './api/location'

function App() {
	const { t } = useTranslation()

	const [city, setCity] = useState<string | null>(() => localStorage.getItem('city'))
	const [ready, setReady] = useState(false)

	useEffect(() => {
		const fetchCity = async () => {
			if (!city) {
				try {
					const data = await fetchCityByIP()
					setCity(data.city || 'London')
				} catch (err) {
					console.error(err)
					setCity('London')
				}
			}
			setReady(true)
		}

		fetchCity()
	}, [city])

	const { weatherData, loading, error } = useWeather(ready && city ? city : null)

	useEffect(() => {
		if (city) {
			localStorage.setItem('city', city)
		}
	}, [city])

	return (
		<>
			<LanguageSwitcher />
			{loading && <Loading text={`${t('loading')}...`} />}
			{error && <ErrorMessage message={error} />}
			<SearchCity onSearch={setCity} />
			<FavoriteList onSelect={setCity} />
			{!loading && weatherData && <WeatherCard weatherData={weatherData} />}
			{weatherData && <AddToFavoritesButton city={weatherData.location.name} />}
		</>
	)
}

export default App
