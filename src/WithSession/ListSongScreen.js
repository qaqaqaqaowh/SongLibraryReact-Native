import React from 'react';
import { Text, FlatList } from 'react-native';
import WithSessionLayout from '../layouts/WithSessionLayout'
import {connect} from 'react-redux';

class ListsSongScreen extends React.Component {
	render() {
		return(
			<WithSessionLayout>
				<FlatList data={[

				]}
				renderItem={(item) => <Text/>}
				/>
			</WithSessionLayout>
		)
	}
}

const mapDispatchToProps = state => ({
	currentUser: state.session.currentUser
})

export default connect(mapDispatchToProps)(ListsSongScreen)