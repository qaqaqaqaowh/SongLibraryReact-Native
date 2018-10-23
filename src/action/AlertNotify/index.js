import { Alert } from 'react-native';

const AlertNotify = (title, text, callback) => {
	Alert.alert(
		title,
		text,
		[
			{text: "Ok", onPress: (callback ? callback : null)}
		]
	)
}

export default AlertNotify