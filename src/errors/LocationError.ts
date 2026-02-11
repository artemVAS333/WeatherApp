export const LocationError = {
	NETWORK_ERROR: 'NETWORK_ERROR',
	UNKNOWN_ERROR: 'UNKNOWN_ERROR',
}

export type LocationError = (typeof LocationError)[keyof typeof LocationError]
