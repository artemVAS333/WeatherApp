import type { LocationData } from '../types/location'

export const fetchCityByIP = async (): Promise<LocationData> => {
	const res = await fetch('https://ipapi.co/json/')
	if (!res.ok) throw new Error('Failed to fetch city by IP')
	return res.json()
}
