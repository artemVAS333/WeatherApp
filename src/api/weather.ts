import { API_KEY, BASE_URL } from './config'
import type { WeatherData } from '../types/weather'

export const fetchCurrentWeather = async (city: string): Promise<WeatherData> => {
	const res = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`)
	if (!res.ok) throw new Error('Failed to fetch weather')
	return res.json()
}
