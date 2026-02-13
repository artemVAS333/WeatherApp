import type { ForecastWeaterData } from '../types/weather'

import { useTranslation } from 'react-i18next'

type ForecastProps = {
	forecastData: ForecastWeaterData
}

const Forecast = ({ forecastData }: ForecastProps) => {
	const { t } = useTranslation('weekDay')

	const dateToDay = (date: string) => {
		const day = new Date(date).getDay()
		return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day]
	}

	return (
		<section aria-labelledby="forecast" style={{ display: 'flex', gap: '1rem' }}>
			<h2 id="forecast"> </h2>
			{forecastData.forecast.forecastday.map((day) => (
				<div key={day.date}>
					<h3>{t(`days.short.${dateToDay(day.date)}`)}</h3>
					<p>{Math.round(day.day.maxtemp_c)}°C</p>
					<p>{Math.round(day.day.mintemp_c)}°C</p>
				</div>
			))}
		</section>
	)
}
export default Forecast
