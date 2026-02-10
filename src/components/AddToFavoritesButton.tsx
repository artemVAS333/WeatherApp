import { useFavoritesContext } from '../contexts/FavoritesContext'

interface Props {
	city: string
}

const AddToFavoritesButton = ({ city }: Props) => {
	const { addToFavorites } = useFavoritesContext()

	return <button onClick={() => addToFavorites(city)}>Add to favorites</button>
}

export default AddToFavoritesButton
