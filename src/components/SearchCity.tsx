import { useState } from 'react'

interface SearchCityProps {
	onSearch: (city: string) => void
}

const SearchCity = ({ onSearch }: SearchCityProps) => {
	const [cityName, setCityName] = useState('')

	const handleSearch = () => {
		if (!cityName.trim()) return
		onSearch(cityName)
	}

	return (
		<div>
			<label htmlFor="city-search">Enter city name</label>
			<input id="city-search" type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder="Enter city name" />
			<button onClick={handleSearch} aria-label={`Search for city ${cityName || 'city'}`}>
				Search
			</button>
		</div>
	)
}

export default SearchCity
