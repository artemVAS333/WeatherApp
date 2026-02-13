import { useState, useEffect } from 'react'

export const useAsincData = <TData, TError>(fetcher: (() => Promise<TData>) | null, errorMessage: TError) => {
	const [data, setData] = useState<TData | null>(null)
	const [error, setError] = useState<TError | null>(null)
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
				setError(errorMessage)
				setData(null)
				console.error(err)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [fetcher, errorMessage])

	return { data, error, loading }
}
