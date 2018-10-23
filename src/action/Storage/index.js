import { AsyncStorage } from 'react-native'

class Storage {
	static get(key, callback) {
		let x = async () => {
		  try {
		    let data = await AsyncStorage.getItem(key)
		    callback(JSON.parse(data))
		  } catch(error) {
		  	callback({error: `Cant fetch ${key}`})
		  }
		}
		x()
	}

	static set(key, value, callback) {
		let x = async () => {
			try {
				await AsyncStorage.setItem(key, JSON.stringify(value))
				callback()
			} catch(error) {
				callback({error: `Cant set ${key}`})
			}
		}
		x()
	}

	static remove(key, callback) {
		let x = async () => {
			try {
				await AsyncStorage.removeItem(key)
				callback()
			} catch(error) {
				callback({error: `Cant remove ${key}`})
			}
		} 
		x()
	}
}

export default Storage