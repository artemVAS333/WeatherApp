import { useState } from 'react'

import { useTranslation } from 'react-i18next'

interface SearchCityProps {
	onSearch: (city: string) => void
}

const SearchCity = ({ onSearch }: SearchCityProps) => {
	const { t } = useTranslation('common')

	const [cityName, setCityName] = useState('')

	const handleSearch = () => {
		if (!cityName.trim()) return
		onSearch(cityName)
	}

	return (
		<div>
			<label htmlFor="city-search">{t('enter_city_name')}</label>
			<input id="city-search" type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder={t('enter_city_name')} />
			<button onClick={handleSearch} aria-label={`Search for city ${cityName || 'city'}`}>
				{t('search')}
			</button>
		</div>
	)
}

export default SearchCity
