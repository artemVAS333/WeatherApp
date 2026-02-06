interface WeatherCardProps {
	city: string
	temperature: number
	weather: string
}

const WeatherCard = ({ city, temperature, weather }: WeatherCardProps) => {
	return (
		<>
			<div>{city}</div>
			<div>{temperature} °C</div>
			<div>{weather}</div>
		</>
	)
}

export default WeatherCard
