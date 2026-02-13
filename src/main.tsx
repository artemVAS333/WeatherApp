import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { loadWeatherConditions } from './i18n'
import App from './App.tsx'

import { FavoritesProvider } from './contexts/FavoritesProvider'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<FavoritesProvider>
			<App />
		</FavoritesProvider>
	</StrictMode>,
)

loadWeatherConditions()
