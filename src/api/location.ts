import type { LocationData } from '../types/location'

import { API_KEY, BASE_URL } from './config'

import { AppError } from '../errors/AppError'
import { LocationError } from '../errors/LocationError'

export const fetchCityByIP = async (): Promise<LocationData> => {
	const res = await fetch(`${BASE_URL}/ip.json?key=${API_KEY}&q=auto:ip`)
	if (!res.ok) throw new AppError(LocationError.UNKNOWN_ERROR)
	return res.json()
}
