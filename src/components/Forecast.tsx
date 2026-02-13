import type { ForecastWeaterData } from '../types/weather'

type ForecastProps = {
	forecastData: ForecastWeaterData
}

const Forecast = ({ forecastData }: ForecastProps) => {
	const dateToDay = (date: string) => {
		const day = new Date(date).getDay()
		return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]
	}

	return (
		<section aria-labelledby="forecast" style={{ display: 'flex', gap: '1rem' }}>
			<h2 id="forecast"> </h2>
			{forecastData.forecast.forecastday.map((day) => (
				<div key={day.date}>
					<h3>{dateToDay(day.date)}</h3>
					<p>{Math.round(day.day.maxtemp_c)}°C</p>
					<p>{Math.round(day.day.mintemp_c)}°C</p>
				</div>
			))}
		</section>
	)
}
export default Forecast
