import { SEARCH_CHANGED, SUBMIT_SEARCH } from '../actions/types';

const INITIAL_STATE = {
	query: '',
	results: ''
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH_CHANGED:
			return { ...state, query: action.payload, results: '' };
		case SUBMIT_SEARCH:
			return { ...state, results: action.payload };
		default:
			return state;
	}
}
