import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import AlertError from '../action/AlertError'
import AlertNotify from '../action/AlertNotify'
import Loading from '../Loading'
import {startLoading, stopLoading} from '../actions'
import {connect} from 'react-redux'

class SignUpScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: null,
			password: null,
			password_confirmation: null,
			loading: false
		}
	}

	handleSignUp = () => {
		this.props.startLoading()
		fetch('http://192.168.1.41:3000/users', {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		  	email: this.state.email,
		  	password: this.state.password,
		  	password_confirmation: this.state.password_confirmation
		  })
		}).catch(() => {
			this.props.stopLoading()
			AlertError("Bad Connection")
		}).then((response) => {
			return response.json()
		}).then((data) => {
			if (data.error) {
				AlertError(data.error)
			} else {
				AlertNotify("Success", `Hi! ${data.email} please sign in now!`, () => {this.props.navigation.goBack()})
			}
			this.props.stopLoading()
		})
	}

	render() {
		const { goBack } = this.props.navigation
		return(
			<View style={styles.container}>
			  <Text style={{fontSize: 20, color: 'purple'}}>Sign Up!!!</Text>
			  <TextInput style={{width: 100, textAlign: 'center', color: 'blue'}} onChangeText={(text) => {this.setState({email: text})}} placeholderTextColor="grey" placeholder="Email" />
			  <TextInput style={{width: 100, textAlign: 'center', color: 'blue'}} onChangeText={(text) => {this.setState({password: text})}} secureTextEntry={true} placeholderTextColor="grey" placeholder="Password" />
			  <TextInput style={{width: 150, textAlign: 'center', color: 'blue'}} onChangeText={(text) => {this.setState({password_confirmation: text})}} secureTextEntry={true} placeholderTextColor="grey" placeholder="Password Confirmation" />
			  <Button title="Sign Up" color="purple" onPress={this.handleSignUp} />
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

const mapDispatchToProps = state => ({})

export default connect(mapDispatchToProps, {
	startLoading,
	stopLoading
})(SignUpScreen)