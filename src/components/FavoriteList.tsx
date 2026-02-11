import { useFavoritesContext } from '../contexts/FavoritesContext'
import { useState } from 'react'

import { useTranslation } from 'react-i18next'

interface FavoriteListProps {
	onSelect: (city: string) => void
}

const FavoriteList = ({ onSelect }: FavoriteListProps) => {
	const { t } = useTranslation('common')

	const { favorites, removeFromFavorites } = useFavoritesContext()
	const [confirmCity, setConfirmCity] = useState<string | null>(null)

	return (
		<ul>
			{favorites.map((city) => (
				<li key={city}>
					<button onClick={() => onSelect(city)} aria-label={`Select ${city} as city`}>
						{city}
					</button>

					{confirmCity === city ?
						<>
							<button
								onClick={() => {
									removeFromFavorites(city)
									setConfirmCity(null)
								}}>
								{t('button.confirm')}
							</button>
							<button onClick={() => setConfirmCity(null)}>{t('button.cancel')}</button>
						</>
					:	<button onClick={() => setConfirmCity(city)}>{t('button.cancel')}</button>}
				</li>
			))}
		</ul>
	)
}

export default FavoriteList
