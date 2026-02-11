import { useFavoritesContext } from '../contexts/FavoritesContext'

interface AddToFavoritesButtonProps {
	city: string
}

const AddToFavoritesButton = ({ city }: AddToFavoritesButtonProps) => {
	const { addToFavorites } = useFavoritesContext()

	return <button onClick={() => addToFavorites(city)}>Add to favorites</button>
}

export default AddToFavoritesButton
