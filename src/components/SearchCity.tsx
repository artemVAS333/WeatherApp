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
			<input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder="Enter city name" />
			<button onClick={handleSearch}>Search</button>
		</div>
	)
}

export default SearchCity
