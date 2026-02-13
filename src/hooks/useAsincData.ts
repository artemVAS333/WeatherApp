import { useState, useEffect } from 'react'

export const useAsincData = <T>(fetcher: (() => Promise<T>) | null) => {
	const [data, setData] = useState<T | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			if (!fetcher) return

			try {
				setError(null)
				setLoading(true)
				const data = await fetcher()
				setData(data)
			} catch (err) {
				setError('Failed to fetch data')
				setData(null)
				console.error(err)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [fetcher])

	return { data, error, loading }
}
