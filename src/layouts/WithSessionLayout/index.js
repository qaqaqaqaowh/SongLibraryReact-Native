import React from 'react';
import {View, Button} from 'react-native';
import { connect } from 'react-redux'
import Storage from '../../action/Storage'
import Loading from '../../Loading'
import { logOut, startLoading, stopLoading } from '../../actions'


class WithSessionLayout extends React.Component {

	logout = () => {
		this.props.startLoading()
		Storage.remove("currentUser", () => {
			this.props.stopLoading()
			this.props.logOut()
		})
	}

	render() {
		return(
			<View style={{flex: 1, backgroundColor: 'black'}}>
				<View style={{flexGrow: 1}}>
					{this.props.children}
				</View>
				<Button title="Log Out" style={{width: "100%"}} color="grey" onPress={this.logout}/>
			</View>
		)
	}
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {
	logOut,
	startLoading,
	stopLoading
})(WithSessionLayout)