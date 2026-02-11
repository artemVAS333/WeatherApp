export const WeatherError = {
	CITY_NOT_FOUND: 'CITY_NOT_FOUND',
	UNKNOWN_ERROR: 'UNKNOWN_ERROR',
}

export type WeatherError = (typeof WeatherError)[keyof typeof WeatherError]
