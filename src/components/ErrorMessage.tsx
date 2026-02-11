import { useTranslation } from 'react-i18next'

interface ErrorMessageProps {
	message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
	const { t } = useTranslation()

	return <p role="alert">{t(message, { ns: 'errors' })}</p>
}

export default ErrorMessage
