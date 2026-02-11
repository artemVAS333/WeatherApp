import { useTranslation } from 'react-i18next'

import type { WeatherData } from '../types/weather'

interface WeatherCardProps {
	weatherData: WeatherData
}

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
	const { t } = useTranslation('weather')
	return (
		<section aria-labelledby="weather-today">
			<h2 id="weather-today">{weatherData.location.name}</h2>
			<p>{Math.round(weatherData.current.temp_c)}°C,</p>
			<p>{t(weatherData.current.condition.code.toString())}</p>
		</section>
	)
}

export default WeatherCard
