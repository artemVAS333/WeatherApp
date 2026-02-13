import type { ForecastWeaterData } from '../types/weather'

type ForecastProps = {
	forecastData: ForecastWeaterData
}

const TodayHourly = ({ forecastData }: ForecastProps) => {
	return (
		<section aria-labelledby="forecast" style={{ display: 'flex', gap: '1rem', width: '400px', overflowX: 'scroll' }}>
			<h2 id="forecast"></h2>
			{forecastData.forecast.forecastday[0].hour.map((hour) => (
				<div key={hour.time}>
					<h3>{hour.time.slice(-5)}</h3>
					<p>{Math.round(hour.temp_c)}°C</p>
				</div>
			))}
		</section>
	)
}
export default TodayHourly
