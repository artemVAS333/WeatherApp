import { API_KEY, BASE_URL } from './config'
import type { WeatherData, ForecastWeaterData } from '../types/weather'

import { AppError } from '../errors/AppError'
import { WeatherError } from '../errors/WeatherError'

export const fetchCurrentWeather = async (city: string): Promise<WeatherData> => {
	const res = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`)
	if (!res.ok) throw new AppError(WeatherError.CITY_NOT_FOUND)
	return res.json()
}

export const fetchForecastWeather = async (city: string, days: number): Promise<ForecastWeaterData> => {
	const res = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`)
	if (!res.ok) throw new AppError(WeatherError.CITY_NOT_FOUND)
	return res.json()
}
