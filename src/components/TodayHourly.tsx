import { useSettingsContext } from '../contexts/SettingsContext'
import type { ForecastWeaterData } from '../types/weather'

type ForecastProps = {
	forecastData: ForecastWeaterData
}

const TodayHourly = ({ forecastData }: ForecastProps) => {
	const { temperatureUnit, timeFormat } = useSettingsContext()

	return (
		<section aria-labelledby="forecast" style={{ display: 'flex', gap: '1rem', width: '400px', overflowX: 'scroll' }}>
			<h2 id="forecast"></h2>
			{forecastData.forecast.forecastday[0].hour.map((hour) => (
				<div key={hour.time}>
					<h3>{hour.time.slice(-5)}</h3>
					<p>
						{Math.round(temperatureUnit === 'C' ? hour.temp_c : hour.temp_f)}°{temperatureUnit}
					</p>
				</div>
			))}
		</section>
	)
}
export default TodayHourly
