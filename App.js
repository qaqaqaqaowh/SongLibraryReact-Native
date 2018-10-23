import React from 'react';
import Session from './src/NoSession'
import Main from './src/WithSession'
import Storage from './src/action/Storage'
import { Provider, connect } from 'react-redux'
import reducer from './src/reducer'
import { createStore } from 'redux'
import MainApp from './src/MainApp'

const store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp/>
      </Provider>
    );
  }
}

const mapDispatchToProps = state => ({logged_in: state.session.logged_in})

export default App