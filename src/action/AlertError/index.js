import { Alert } from 'react-native';

const AlertError = (text, callback) => {
	Alert.alert(
		"Error",
		JSON.stringify(text),
		[
			{text: "Ok", onPress: (callback ? callback : null)}
		]
	)
}

export default AlertError