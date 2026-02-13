import type { ForecastWeaterData } from '../types/weather'

import { useSettingsContext } from '../contexts/SettingsContext'

import { useTranslation } from 'react-i18next'

type ForecastProps = {
	forecastData: ForecastWeaterData
}

const Forecast = ({ forecastData }: ForecastProps) => {
	const { t } = useTranslation('weekDay')

	const { temperatureUnit } = useSettingsContext()

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
					<p>
						{Math.round(temperatureUnit === 'C' ? day.day.maxtemp_c : day.day.maxtemp_f)}°{temperatureUnit}
					</p>
					<p>
						{Math.round(temperatureUnit === 'C' ? day.day.mintemp_c : day.day.mintemp_f)}°{temperatureUnit}
					</p>
				</div>
			))}
		</section>
	)
}
export default Forecast
