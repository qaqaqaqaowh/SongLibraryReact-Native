import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class Loading extends Component {
  render() {
    return (
      this.props.visible ?
      <View style={{...StyleSheet.absoluteFillObject, flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', zIndex: 999}}>
        <ActivityIndicator size='large' />
      </View> : null
    );
  }
}

const mapStateToProps = state => {
  return { visible: state.loading }
}

export default connect(mapStateToProps)(Loading)