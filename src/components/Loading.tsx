interface LoadingProps {
	text?: string
}

const Loading = ({ text = 'Loading' }: LoadingProps = {}) => {
	return <output>{text}</output>
}

export default Loading
