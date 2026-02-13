import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
	const { t, i18n } = useTranslation()

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
		localStorage.setItem('language', lng)
	}

	return (
		<>
			<label htmlFor="language-select" className="sr-only">
				{t('choose_language')}
			</label>
			<select id="language-select" onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
				<option value="en">English</option>
				<option value="uk">Українська</option>
			</select>
		</>
	)
}

export default LanguageSwitcher
