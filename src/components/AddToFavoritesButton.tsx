import { useFavoritesContext } from '../contexts/FavoritesContext'

import { useTranslation } from 'react-i18next'

interface AddToFavoritesButtonProps {
	city: string
}

const AddToFavoritesButton = ({ city }: AddToFavoritesButtonProps) => {
	const { t } = useTranslation('common')

	const { addToFavorites } = useFavoritesContext()

	return <button onClick={() => addToFavorites(city)}>{t('add_to_bookmarks')}</button>
}

export default AddToFavoritesButton
