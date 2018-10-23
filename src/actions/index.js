import * as actionType from './ActionType';

export const startLoading = () => ({
	type: actionType.START_LOADING
});

export const stopLoading = () => ({
	type: actionType.STOP_LOADING
});

export const logOut = () => ({
	type: actionType.LOG_OUT
})

export const logIn = (user) => ({
	type: actionType.LOG_IN,
	payload: user
})