import { useFavoritesContext } from '../contexts/FavoritesContext'
import { useState } from 'react'

interface FavoriteListProps {
	onSelect: (city: string) => void
}

const FavoriteList = ({ onSelect }: FavoriteListProps) => {
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
								Confirm
							</button>
							<button onClick={() => setConfirmCity(null)}>Cancel</button>
						</>
					:	<button onClick={() => setConfirmCity(city)}>Remove</button>}
				</li>
			))}
		</ul>
	)
}

export default FavoriteList
