import { FETCH_USER, SAVE_TOKENS } from '../actions/types';

const INITIAL_STATE = {
	user: '',
	accessToken: '',
	refreshToken: ''
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_USER:
			return { ...state, user: action.payload };
		case SAVE_TOKENS:
			return {
				...state,
				accessToken: action.payload.accessToken,
				refreshToken: action.payload.refreshToken
			};
		default:
			return state;
	}
}
