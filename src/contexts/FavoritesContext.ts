import { createContext, useContext } from 'react'

interface FavoriteContextProps {
	favorites: string[]
	addToFavorites: (city: string) => void
	removeFromFavorites: (city: string) => void
}

export const FavoritesContext = createContext<FavoriteContextProps>({
	favorites: [],
	addToFavorites: () => {},
	removeFromFavorites: () => {},
})

export const useFavoritesContext = () => useContext(FavoritesContext)
