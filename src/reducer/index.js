import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import sessionReducer from './sessionReducer'

const app = combineReducers({
  loading: loadingReducer,
  session: sessionReducer
})

export default app