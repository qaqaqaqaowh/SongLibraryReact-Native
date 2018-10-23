import * as actionType from '../actions/ActionType';

const sessionReducer = (state = {loggedIn: false, currentUser: null}, action) => {
	switch (action.type) {
		case actionType.LOG_OUT:
			return {loggedIn: false, currentUser: null}
		case actionType.LOG_IN:
			return {loggedIn: true, currentUser: action.payload}
		default:
			return state
	}
}

export default sessionReducer