export interface WeatherData {
	location: {
		name: string
	}
	current: {
		temp_c: number
		temp_f: number
		condition: {
			text: string
			code: number
		}
	}
}

export interface ForecastWeaterData {
	location: {
		name: string
	}
	current: WeatherData['current']
	forecast: {
		forecastday: {
			date: string
			day: {
				maxtemp_c: number
				maxtemp_f: number
				mintemp_c: number
				mintemp_f: number
				avgtemp_c: number
				avgtemp_f: number
			}
			hour: {
				time: string
				temp_c: number
				temp_f: number
				is_day: number
			}[]
		}[]
	}
}
