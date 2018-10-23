import * as actionType from '../actions/ActionType';

const loadingReducer = (state = false, action) => {
	switch (action.type) {
		case actionType.START_LOADING:
			return true
		case actionType.STOP_LOADING:
			return false
		default:
			return false
	}
}

export default loadingReducer