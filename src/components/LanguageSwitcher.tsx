import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
		localStorage.setItem('language', lng)
	}

	return (
		<div>
			<button onClick={() => changeLanguage('en')}>English</button>
			<button onClick={() => changeLanguage('uk')}>Українська</button>
		</div>
	)
}

export default LanguageSwitcher
