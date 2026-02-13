import { API_KEY, BASE_URL } from './config'
import type { WeatherData, ForecastWeaterData } from '../types/weather'
import type { LocationData } from '../types/location'

import { AppError } from '../errors/AppError'
import { WeatherError } from '../errors/WeatherError'

export class WeatherAPI {
	private readonly apiKey: string
	private readonly baseUrl: string

	constructor(apiKey: string = API_KEY, baseUrl: string = BASE_URL) {
		this.apiKey = apiKey
		this.baseUrl = baseUrl
	}

	private async fetchURL(url: string) {
		const res = await fetch(url)
		if (!res.ok) {
			switch (res.status) {
				case 400:
					throw new AppError(WeatherError.CITY_NOT_FOUND)
				case 401:
					throw new AppError(WeatherError.UNKNOWN_ERROR)
				case 403:
					throw new AppError(WeatherError.UNKNOWN_ERROR)
			}
		}
		return res
	}

	async getCurrentWeather(city: string): Promise<WeatherData> {
		const url = `${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}`
		const res = await this.fetchURL(url)
		return res.json()
	}

	async getForecastWeather(city: string, days: number): Promise<ForecastWeaterData> {
		const url = `${this.baseUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=${days}`
		const res = await this.fetchURL(url)
		return res.json()
	}

	async getIP(): Promise<LocationData> {
		const url = `${this.baseUrl}/ip.json?key=${this.apiKey}&q=auto:ip`
		const res = await this.fetchURL(url)
		return res.json()
	}
}
