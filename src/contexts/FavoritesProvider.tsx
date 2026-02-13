import { useState, useEffect, useMemo, useCallback } from 'react'
import { FavoritesContext } from './FavoritesContext'

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
	const [favorites, setFavorites] = useState<string[]>(() => {
		const storedFavorites = localStorage.getItem('favorites')
		return storedFavorites ? JSON.parse(storedFavorites) : []
	})

	const addToFavorites = useCallback((city: string) => {
		setFavorites((prev) => {
			if (!prev.includes(city)) {
				return [...prev, city]
			}
			return prev
		})
	}, [])

	const removeFromFavorites = useCallback((city: string) => {
		setFavorites((prev) => {
			return prev.filter((favorite) => favorite !== city)
		})
	}, [])

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])

	const value = useMemo(() => {
		return {
			favorites,
			addToFavorites,
			removeFromFavorites,
		}
	}, [favorites, addToFavorites, removeFromFavorites])

	return <FavoritesContext.Provider value={value}> {children} </FavoritesContext.Provider>
}
