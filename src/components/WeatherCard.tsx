import { useTranslation } from 'react-i18next'

import type { WeatherData } from '../types/weather'

import { useSettingsContext } from '../contexts/SettingsContext'

interface WeatherCardProps {
	weatherData: WeatherData
}

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
	const { t } = useTranslation('weather')
	const { temperatureUnit } = useSettingsContext()

	return (
		<section aria-labelledby="weather-today">
			<h2 id="weather-today">{weatherData.location.name}</h2>
			<p>
				{Math.round(temperatureUnit === 'C' ? weatherData.current.temp_c : weatherData.current.temp_f)}°{temperatureUnit}
			</p>
			<p>{t(weatherData.current.condition.code.toString())}</p>
		</section>
	)
}

export default WeatherCard
