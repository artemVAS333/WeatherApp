export interface WeatherData {
	location: {
		name: string
	}
	current: {
		temp_c: number
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
				mintemp_c: number
				avgtemp_c: number
			}
			hour: {
				time: string
				temp_c: number
			}[]
		}[]
	}
}
