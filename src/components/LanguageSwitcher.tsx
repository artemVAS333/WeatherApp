import { useTranslation } from 'react-i18next'

import type { Language } from '../contexts/SettingsContext'
import { useSettingsContext } from '../contexts/SettingsContext'

const LanguageSwitcher = () => {
	const { t } = useTranslation()

	const { language, changeLanguage } = useSettingsContext()

	return (
		<div style={{ display: 'flex' }}>
			<label htmlFor="language-select" className="sr-only">
				{t('choose_language')}
			</label>
			<select id="language-select" onChange={(e) => changeLanguage(e.target.value as Language)} value={language}>
				<option value="en">English</option>
				<option value="uk">Українська</option>
			</select>
		</div>
	)
}

export default LanguageSwitcher
