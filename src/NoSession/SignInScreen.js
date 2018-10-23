import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AlertError from '../action/AlertError'
import Storage from '../action/Storage'
import Loading from '../Loading'
import { connect } from 'react-redux'
import { startLoading, stopLoading, logIn } from '../actions/index.js'

class SignInScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: null,
			password: null
		}
	}

	handleLogin = () => {
		this.props.startLoading()
		fetch('http://192.168.1.41:3000/signin', {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		  	email: this.state.email,
		  	password: this.state.password
		  })
		}).catch(() => {
			this.props.stopLoading()
			AlertError("Bad Connection")
		}).then((response) => {
			return response.json()
		}).then((data) => {
			if (data.error) {
				this.props.stopLoading()
				AlertError(data.error)
			} else {
				Storage.set("currentUser", data, () => {
					this.props.stopLoading()
					this.props.logIn(data)
				})
			}
		})
	}

	render() {
		const { navigate } = this.props.navigation
		return(
			<View style={styles.container}>
			  <Text style={{fontSize: 20, color: 'purple'}}>Youtube Video Player</Text>
			  <TextInput autoCapitalize="none" autoCorrect={false} keyboardType="email-address" style={{width: 100, textAlign: 'center', color: 'blue'}} onChangeText={(text) => this.setState({email: text})} placeholderTextColor="grey" placeholder="Email" />
			  <TextInput autoCapitalize="none" autoCorrect={false} style={{width: 100, textAlign: 'center', color: 'blue'}} onChangeText={(text) => this.setState({password: text})} secureTextEntry={true} placeholderTextColor="grey" placeholder="Password" />
			  <Button title="Log In" color="purple" onPress={this.handleLogin} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {
  startLoading,
  stopLoading,
  logIn
})(SignInScreen)