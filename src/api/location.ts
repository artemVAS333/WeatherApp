import type { LocationData } from '../types/location'

import { AppError } from '../errors/AppError'
import { LocationError } from '../errors/LocationError'

export const fetchCityByIP = async (): Promise<LocationData> => {
	const res = await fetch('https://ipapi.co/json/')
	if (!res.ok) throw new AppError(LocationError.NETWORK_ERROR)
	return res.json()
}
