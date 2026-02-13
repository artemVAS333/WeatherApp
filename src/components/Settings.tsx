import { useSettingsContext } from '../contexts/SettingsContext'
import LanguageSwitcher from './LanguageSwitcher'

const Settings = () => {
	const { temperatureUnit, changeTemperatureUnit, timeFormat, changeTimeFormat, language } = useSettingsContext()

	return (
		<section>
			{/* <h2>{temperatureUnit}</h2> */}
			{/* <h2>{timeFormat}</h2> */}
			{/* <h2>{language}</h2> */}
			<button onClick={changeTemperatureUnit}>Change Temperature Unit</button>
			{/* <button onClick={changeTimeFormat}>Change Time Format</button> */}
			<LanguageSwitcher />
		</section>
	)
}

export default Settings
