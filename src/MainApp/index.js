import React from 'react';
import Session from '../NoSession'
import Main from '../WithSession'
import Storage from '../action/Storage'
import { connect } from 'react-redux'
import reducer from '../reducer'
import Loading from '../Loading'
import { View, Animated, StyleSheet } from 'react-native'
import { logOut, logIn } from '../actions'

class MainApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(1),
      loadingScreen: true
    }
  }

  checkLogin = () => {
    Storage.get("currentUser", (data) => {
      if (!data.error) {
        this.props.logIn(data)
      }
    })
  }

  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: 2000
      }
    ).start(() => this.setState({loadingScreen: false}))
  }

  render() {
    this.checkLogin()
    return (
      <View style={{flex: 1, zIndex: 0}}>
        { this.state.loadingScreen ?
          (<Animated.View style={{...StyleSheet.absoluteFillObject, opacity: this.state.opacity, backgroundColor: "black", zIndex: 999}}>
            </Animated.View>) :
          null
        }
        <Loading />
        {this.props.loggedIn ? <Main/> :
        <Session/>}
      </View>
    );
  }
}

const mapDispatchToProps = state => ({loggedIn: state.session.loggedIn, currentUser: state.session.currentUser})

export default connect(mapDispatchToProps, {
  logIn
})(MainApp)