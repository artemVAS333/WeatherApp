import { useState, useEffect } from 'react'
import { FavoritesContext } from './FavoritesContext'

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
	const [favorites, setFavorites] = useState<string[]>(() => {
		const storedFavorites = localStorage.getItem('favorites')
		return storedFavorites ? JSON.parse(storedFavorites) : []
	})

	const addToFavorites = (city: string) => {
		if (!favorites.includes(city)) {
			setFavorites([...favorites, city])
		}
	}

	const removeFromFavorites = (city: string) => {
		setFavorites(favorites.filter((favorite) => favorite !== city))
	}

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])

	return <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}> {children} </FavoritesContext.Provider>
}
