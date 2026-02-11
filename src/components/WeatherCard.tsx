interface WeatherCardProps {
	city: string
	temperature: number
	weather: string
}

const WeatherCard = ({ city, temperature, weather }: WeatherCardProps) => {
	return (
		<section aria-labelledby="weather-today">
			<h2 id="weather-today">Weather in {city}</h2>
			<p>
				{temperature}°C, {weather}
			</p>
		</section>
	)
}

export default WeatherCard
