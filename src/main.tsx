import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { loadWeatherConditions } from './i18n/i18n.ts'
import App from './app/App.tsx'

import { FavoritesProvider } from './contexts/FavoritesProvider'
import { SettingsProvider } from './contexts/SettingsProvider'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<SettingsProvider>
			<FavoritesProvider>
				<App />
			</FavoritesProvider>
		</SettingsProvider>
	</StrictMode>,
)

loadWeatherConditions()
